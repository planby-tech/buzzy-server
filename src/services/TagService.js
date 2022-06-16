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

const addHours = (date, numOfHours) => {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  return date;
};

const UTC = (string) => {
  const date = string.split("/")[0];
  const time =
    string.split("/")[1].split(" ")[0].replace("시", "") +
    ":" +
    string.split("/")[1].split(" ")[1].replace("분", "") +
    ":00:000";
  const stringToDate = addHours(new Date(date + " " + time), 9);
  return stringToDate;
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

    const now = new Date();
    const compareDate = moment(now);

    for await (const meeting of meetings) {
      const startDate = moment(UTC(meeting.start));
      const endDate = moment(UTC(meeting.end));

      if (compareDate.isBetween(startDate, endDate)) {
        await meeting.increment("tagNumber");
        const tagNumber = meeting.tagNumber;
        const users = await meeting.getUsers();

        if (groupRecord.hasTag(tagRecord)) {
          await meeting.removeTag(tagRecord);
          await groupRecord.removeTag(tagRecord);
          await meeting.addTag(tagRecord);
          await groupRecord.addTag(tagRecord);
          return { tag: tagRecord, meeting: meeting, status: 1 };
        }

        if (tagNumber >= users.length) {
          await meeting.addTag(tagRecord.id);
          await groupRecord.addTag(tagRecord.id);
          return { tag: tagRecord, meeting: meeting, status: 1 };
        } else {
          return { tag: tagRecord, meeting: meeting, status: 0 };
        }
      }
    }

    const start = now;
    const end = addHours(new Date(), 1);

    const meetingRecord = {
      title: `${tagRecord.name}에서의 약속`,
      start: start,
      end: end,
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
