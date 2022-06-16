import moment from "moment-timezone";
import db from "../db/models/index.js";

const isEqual = (a, b) => {
  if (a.length !== b.length) return false;
  const uniqueValues = new Set([...a, ...b]);
  for (const v of uniqueValues) {
    const aCount = a.filter((e) => e === v).length;
    const bCount = b.filter((e) => e === v).length;
    if (aCount !== bCount) return false;
  }
  return true;
};

const KST = (date) => {
  const dateToString = moment(date)
    .utc()
    .utcOffset("+09:00")
    .format("YYYY-MM-DD/HH시 mm분");
  return dateToString;
};

export default class MeetingService {
  async createMeeting(groupId, meetingDTO) {
    const start = new Date(meetingDTO.start);
    const end = new Date(meetingDTO.end);

    const startDay = new Date(start.getTime() + 9 * 60 * 60 * 1000).getDate();
    const endDay = new Date(end.getTime() + 9 * 60 * 60 * 1000).getDate();
    const duration = {};

    if (startDay !== endDay) {
      const startKey = KST(start).split("/")[0];
      const endKey = KST(end).split("/")[0];
      duration[startKey] = { start: true, end: false };
      duration[endKey] = { start: false, end: true };
    }

    const meetingRecord = await db.Meeting.create({
      title: meetingDTO.title,
      start: KST(start),
      end: KST(end),
      allDay: meetingDTO.allDay,
      duration: duration,
      tagNumber: meetingDTO.tagNumber || 0,
      postNumber: 0,
    });

    const groupRecord = await db.Group.findByPk(groupId);
    await groupRecord.addMeeting(meetingRecord);

    if (meetingDTO.isTagged) {
      await meetingRecord.addTag(meetingDTO.isTagged);
      await groupRecord.addTag(meetingDTO.isTagged);
    }

    for await (const place of meetingDTO.places) {
      db.Place.create({
        name: place.name,
        latitude: place.latitude,
        longitude: place.longitude,
      }).then((place) => {
        meetingRecord.addPlace(place);
      });
    }
    await meetingRecord.addUsers(meetingDTO.users);
    await meetingRecord.addActivities(meetingDTO.activities);

    return meetingRecord;
  }

  async readMeeting(meetingId) {
    const meetingRecord = await db.Meeting.findOne({
      where: {
        id: meetingId,
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
          as: "posts",
        },
        {
          model: db.Comment,
          as: "comments",
        },
      ],
    });
    if (!meetingRecord) {
      throw new Error("Meeting not found!");
    }
    return meetingRecord;
  }

  async updateMeeting(meetingId, meetingDTO) {
    const start = new Date(meetingDTO.start);
    const end = new Date(meetingDTO.end);

    const startDay = new Date(start.getTime() + 9 * 60 * 60 * 1000).getDate();
    const endDay = new Date(end.getTime() + 9 * 60 * 60 * 1000).getDate();
    const duration = {};

    if (startDay !== endDay) {
      const startKey = KST(start).split("/")[0];
      const endKey = KST(end).split("/")[0];
      duration[startKey] = { start: true, end: false };
      duration[endKey] = { start: false, end: true };
    }

    const meetingRecord = await db.Meeting.update(
      {
        title: meetingDTO.title,
        start: KST(start),
        end: KST(end),
        allDay: meetingDTO.allDay,
        duration: duration,
      },
      { where: { id: meetingId } }
    );

    if (!meetingRecord) {
      throw new Error("Meeting not found!");
    }

    const placeRecord = await meetingRecord.getPlaces();
    if (!isEqual(placeRecord, meetingDTO.places)) {
      for await (const place of placeRecord) {
        db.Place.destroy({
          where: {
            id: place.id,
          },
        });
      }

      for await (const place of meetingDTO.places) {
        db.Place.create({
          name: place.name,
          latitude: place.latitude,
          longitude: place.longitude,
        }).then((place) => {
          meetingRecord.addPlace(place);
        });
      }
    }

    const users = await meetingRecord.getUsers();
    const userRecord = [];
    for (let i = 0; i < users.length; i++) {
      userRecord.push(users[i].id);
    }
    if (!isEqual(userRecord, meetingDTO.users)) {
      await meetingRecord.removeUsers(userRecord);
      await meetingRecord.addUsers(meetingDTO.users);
    }

    const activities = await meetingRecord.getActivities();
    const activityRecord = [];
    for (let i = 0; i < activities.length; i++) {
      activityRecord.push(activities[i].id);
    }
    if (!isEqual(activityRecord, meetingDTO.activities)) {
      await meetingRecord.removeActivities(activityRecord);
      await meetingRecord.addActivities(meetingDTO.activities);
    }

    return meetingRecord;
  }

  async deleteMeeting(meetingId) {
    const meetingRecord = await db.Meeting.findByPk(meetingId);
    if (!meetingRecord) {
      throw new Error("Meeting not found!");
    }
    const placeRecord = await meetingRecord.getPlaces();
    for await (const place of placeRecord) {
      db.Place.destroy({
        where: {
          id: place.id,
        },
      });
    }
    await db.Meeting.destroy({
      where: {
        id: meetingId,
      },
    });
    return;
  }

  async findPlaces(meetingId) {
    const meetingRecord = await db.Meeting.findByPk(meetingId);
    if (!meetingRecord) {
      throw new Error("Meeting not found!");
    }
    const placeRecord = await meetingRecord.getPlaces();
    return placeRecord;
  }

  async findUsers(meetingId) {
    const meetingRecord = await db.Meeting.findByPk(meetingId);
    if (!meetingRecord) {
      throw new Error("Meeting not found!");
    }
    const userRecord = await meetingRecord.getUsers();
    return userRecord;
  }

  async findActivities(meetingId) {
    const meetingRecord = await db.Meeting.findByPk(meetingId);
    if (!meetingRecord) {
      throw new Error("Meeting not found!");
    }
    const activityRecord = await meetingRecord.getActivities();
    return activityRecord;
  }

  async findPosts(meetingId) {
    const meetingRecord = await db.Meeting.findOne({
      where: {
        id: meetingId,
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
          as: "posts",
        },
        {
          model: db.Comment,
          as: "comments",
        },
      ],
    });
    if (!meetingRecord) {
      throw new Error("Meeting not found!");
    }
    const posts = await meetingRecord.getPosts();
    const postRecord = [];

    for await (const post of posts) {
      const questionRecord = [];
      const answerRecord = await post.getAnswers();
      const imageRecord = await post.getImages();

      for await (const answer of answerRecord) {
        const question = await db.Question.findByPk(answer.questionId);
        questionRecord.push(question);
      }

      postRecord.push({
        user: post.userId,
        questions: questionRecord,
        answers: answerRecord,
        images: imageRecord,
      });
    }

    return { meetingRecord, postRecord };
  }

  async findComments(meetingId) {
    const meetingRecord = await db.Meeting.findByPk(meetingId);
    if (!meetingRecord) {
      throw new Error("Meeting not found!");
    }
    const commentRecord = await meetingRecord.getComments();
    return commentRecord;
  }
}
