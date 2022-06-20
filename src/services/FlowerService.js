import db from "../db/models/index.js";

const Op = db.Sequelize.Op;
const flowerArray = [1, 2, 1, 3, 2, 3, 1, 2, 3];

export default class FlowerService {
  async generateFlower(groupId, meeting) {
    const groupRecord = await db.Group.findByPk(groupId);
    const meetingRecord = meeting;

    const flowers = await groupRecord.getFlowers();
    const flowerSize = flowerArray[flowers.length % flowerArray.length];

    const exceptFlower = [];

    for (const flower of flowers) {
      if (flower.size === flowerSize) {
        exceptFlower.push(flower.id);
      }
    }

    const newFlowers = await db.Flower.findAll({
      where: {
        id: {
          [Op.notIn]: exceptFlower,
        },
        size: flowerSize,
      },
    });

    const index = Math.floor(Math.random() * newFlowers.length);
    const flowerRecord = newFlowers[index];

    await groupRecord.addFlower(flowerRecord);
    await flowerRecord.addMeeting(meetingRecord);

    return flowerRecord;
  }

  async findPosts(groupId, flowerId) {
    const meetingRecord = await db.Meeting.findOne({
      where: {
        groupId: groupId,
        flowerId: flowerId,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: db.Activity,
          as: "activities",
        },
        {
          model: db.User,
          as: "users",
        },
        {
          model: db.Place,
          as: "places",
        },
        {
          model: db.Comment,
          as: "comments",
        },
        {
          model: db.Post,
          as: "posts",
        },
        {
          model: db.Image,
          as: "images",
        },
      ],
    });

    if (!meetingRecord) {
      throw new Error("Meeting not found!");
    }

    const postRecord = [];

    for await (const post of meetingRecord.posts) {
      const questionRecord = [];
      const userRecord = await post.getUser();
      const answerRecord = await post.getAnswers();

      for await (const answer of answerRecord) {
        const question = await db.Question.findByPk(answer.questionId);
        questionRecord.push(question);
      }

      postRecord.push({
        user: userRecord.name,
        questions: questionRecord,
        answers: answerRecord,
      });
    }

    return { meeting: meetingRecord, posts: postRecord };
  }
}
