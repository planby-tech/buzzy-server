import db from "../db/models/index.js";

const Op = db.Sequelize.Op;

export default class QuestionService {
  async generateQuestion(meetingId) {
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
    //       [Op.or]: indices,
    //     },
    //   },
    // });

    // await meetingRecord.addQuestions(newQuestions);
    // questionRecord.concat(newQuestions);

    // return questionRecord;

    const meetingRecord = db.Meeting.findByPk(meetingId);
    const activities = meetingRecord.getActivities();
    const activityRecord = [];

    for (const activity of activities) {
      activityRecord.push(activity.id);
    }
    const questionRecord = db.Question.findAll({
      where: {
        activityType: {
          [Op.or]: activityRecord,
        },
      },
    });

    return questionRecord;
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
