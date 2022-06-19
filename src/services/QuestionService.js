import db from "../db/models/index.js";

const getMultipleRandom = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const Op = db.Sequelize.Op;

export default class QuestionService {
  async generateQuestion(meetingId) {
    // for Production code
    // const meetingRecord = await db.Meeting.findByPk(meetingId);
    // const questionRecord = await meetingRecord.getQuestions();
    // const count = await db.Question.count();
    // const questionCount = questionRecord.length;
    // let indices = [];

    // for (let i = 0; i < 20 - questionCount; i++) {
    //   indices.push(Math.floor(Math.random() * count));
    // }
    // const newQuestions = await db.Question.findAll({
    //   where: {
    //     id: {
    //       [Op.in]: indices,
    //     },
    //   },
    // });

    // await meetingRecord.addQuestions(newQuestions);
    // questionRecord.concat(newQuestions);

    // return questionRecord;

    // for Exhibition code
    const meetingRecord = await db.Meeting.findByPk(meetingId);
    const activities = await meetingRecord.getActivities();
    const activityRecord = [];

    for (const activity of activities) {
      activityRecord.push(activity.id);
    }
    const questionRecord = await db.Question.findAll({
      where: {
        activityType: {
          [Op.in]: activityRecord,
        },
      },
    });

    let realQuestions = getMultipleRandom(questionRecord, 2);

    const commonQuestions = await db.Question.findAll({
      where: {
        activityType: 1000,
      },
    });

    realQuestions = realQuestions.concat(commonQuestions);

    return realQuestions;
  }

  async excludeQuestion(meetingId, questionId) {
    try {
      return;
    } finally {
      const meetingRecord = await db.Meeting.findByPk(meetingId);
      const questionRecord = await db.Question.findByPk(questionId);
      await meetingRecord.removeQuestion(questionRecord);
    }
  }
}
