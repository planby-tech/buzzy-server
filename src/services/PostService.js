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

export default class PostService {
  async createPost(meetingId, userId, postDTO) {
    await db.Meeting.increment(
      { postNumber: 1 },
      {
        where: { id: meetingId },
      }
    ); // Needs some exception processing
    const meetingRecord = await db.Meeting.findByPk(meetingId);
    const userRecord = await db.User.findByPk(userId);
    const postRecord = await db.Post.create({
      title: meetingRecord.title,
      meetingId: meetingId,
      userId: userId,
    });

    for await (const questionAnswer of postDTO.questionAnswers) {
      const question = await db.Question.findOne({
        where: {
          content: questionAnswer.question,
        },
      });
      await postRecord.addQuestion(question);
      const answer = await db.Answer.create({
        content: questionAnswer.answer,
      });
      await postRecord.addAnswer(answer);
      await userRecord.addAnswer(answer);
      await question.addAnswer(answer);
    }

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
    // Should be matched with createPost
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
