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

const addHours = (numOfHours, date) => {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  return date;
};

export default class TagService {
  async tagging(userId, groupId, tagUid) {
    const tagRecord = await db.Tag.findOne({
      where: {
        uid: tagUid,
      },
    });
    if (!tagRecord) {
      throw new Error("Tag not found!");
    }

    const groupRecord = await db.Group.findByPk(groupId);
    const meetings = await groupRecord.getMeetings();

    let now = new Date();
    const compareDate = moment(now);

    for await (const meeting of meetings) {
      const startDate = moment(meeting.start);
      const endDate = moment(meeting.end);
      if (compareDate.isBetween(startDate, endDate)) {
        await meeting.increment("tagNumber");
        const tagNumber = meeting.tagNumber;
        const users = await meeting.getUsers();
        if (tagNumber >= users.length) {
          await meeting.addTag(tagRecord.id);
          return { tag: tagRecord, meeting: meeting, status: 1 };
        } else {
          return { tag: tagRecord, meeting: meeting, status: 0 };
        }
      }
    }

    const meetingRecord = {
      title: `${tagRecord.name}에서의 약속`,
      start: now,
      end: addHours(1, now),
      allDay: false,
      tagNumber: 1,
      places: [
        {
          name: tagRecord.name,
          latitude: tagRecord.latitude,
          longitude: tagRecord.longitude,
        },
      ],
      users: [userId],
      activities: [12],
      isTagged: tagRecord.id,
    };

    return { tag: tagRecord, meeting: meetingRecord, status: 2 };
  }
}
