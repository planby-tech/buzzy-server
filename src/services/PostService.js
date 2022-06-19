import AWS from "aws-sdk";
import dotenv from "dotenv";
import path from "path";
import db from "../db/models/index.js";
import { isEqual } from "../helpers/ArrayManager.js";

const envFound = dotenv.config();
if (envFound.error) {
  const envFound2 = dotenv.config({ path: path.resolve("../.env") });
  if (envFound2.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
  }
}

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
});

const uploadFile = (fileBlob, postId) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${postId}/${fileName}`,
    Body: fileBlob,
  };
  s3.upload(params, (s3Err, data) => {
    if (s3Err) throw s3Err;
    return data.Location;
  });
};

export default class PostService {
  async createPost(meetingId, userId, postDTO) {
    const meetingRecord = await db.Meeting.findByPk(meetingId);
    const userRecord = await db.User.findByPk(userId);
    const postRecord = await db.Post.create({
      title: meetingRecord.title,
      meetingId: meetingId,
      userId: userId,
    });

    for await (const questionAnswer of postDTO.questionAnswers) {
      await db.Question.findOne({
        where: {
          content: questionAnswer.question,
        },
      }).then((question) => {
        postRecord.addQuestion(question);
        db.Answer.create({
          content: questionAnswer.answer,
        }).then((answer) => {
          postRecord.addAnswer(answer);
          userRecord.addAnswer(answer);
          question.addAnswer(answer);
        });
      });
    }

    // await Promise.all(
    //   postDTO.images.map((image) => {
    //     const url = uploadFile(image, postId);
    //     db.Image.create({
    //       url: url,
    //     }).then((image) => {
    //       postRecord.addImage(image);
    //       userRecord.addImage(image);
    //     });
    //   })
    // );

    await db.Meeting.increment("postNumber");
    meetingRecord.postNumber += 1;
    const users = await meetingRecord.getUsers();

    if (meetingRecord.postNumber === users.length) {
      return { meeting: meetingRecord, post: postRecord, status: 1 };
    } else {
      return { meeting: meetingRecord, post: postRecord, status: 0 };
    }
  }

  async readPost(postId) {
    const post = await db.Post.findByPk(postId);
    if (!post) {
      throw new Error("Post not found!");
    }
    const answers = await post.getAnswers();
    const images = await post.getImages();

    const postRecord = { questionAnswers: [], images: images };
    for await (const answer of answers) {
      const question = await db.Question.findByPk(answer.questionId);
      postRecord.questionAnswers.push({ question: question, answer: answer });
    }

    return postRecord;
  }

  async updatePost(postId, postDTO) {
    const postRecord = await db.Post.update(
      { title: postDTO.title },
      { where: { id: postId } }
    );
    if (!postRecord) {
      throw new Error("Post not found!");
    }

    await db.Meeting.update(
      { title: postDTO.title },
      { where: { id: postRecord.meetingId } }
    );

    const userRecord = await db.User.findByPk(postRecord.userId);
    const images = await postRecord.getImages();
    const imageRecord = [];
    for (let i = 0; i < images.length; i++) {
      imageRecord.push(images[i].url);
    }
    if (!isEqual(imageRecord, postDTO.images)) {
      await Promise.all(
        images.map((image) => {
          db.Image.destroy({
            where: {
              id: image.id,
            },
          });
        })
      );
      await Promise.all(
        postDTO.images.map((image) => {
          db.Image.create({
            url: image,
          }).then((image) => {
            postRecord.addImage(image);
            userRecord.addImage(image);
          });
        })
      );
    }

    const answers = await postRecord.getAnswers();
    const answerIds = [];
    const answerRecord = [];
    for (let i = 0; i < answers.length; i++) {
      answerIds.push(answers[i].id);
      answerRecord.push(answers[i].content);
    }
    const updatedAnswerRecord = [];
    for (let i = 0; i < postDTO.answers.length; i++) {
      updatedAnswerRecord.push(postDTO.answers[i]);
    }

    if (!isEqual(answerRecord, updatedAnswerRecord)) {
      let index = 0;
      for await (const answer of updatedAnswerRecord) {
        db.Answer.update(
          { content: answer },
          { where: { id: answerIds[index] } }
        ).then(() => {
          index++;
        });
      }
    }

    return postRecord;
  }

  async deletePost(postId) {
    const postRecord = await db.Post.findByPk(postId);
    const answerRecord = await postRecord.getAnswers();
    const imageRecord = await postRecord.getImages();

    await Promise.all(
      answerRecord.map((answer) => {
        db.Answer.destroy({
          where: {
            id: answer.id,
          },
        });
      })
    );

    await Promise.all(
      imageRecord.map((image) => {
        db.Image.destroy({
          where: {
            id: image.id,
          },
        });
      })
    );

    await db.Post.destroy({
      where: {
        id: postId,
      },
    });

    return;
  }
}
