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

export default class TagService {
  async addTag(userId, groupId, tagId) {
    const tagRecord = await db.Tag.findOne({
      where: {
        uid: tagId,
      },
    });
    if (!tagRecord) {
      throw new Error("Tag not found!");
    }

    const groupRecord = await db.Group.findByPk(groupId);
    const meetingRecord = await groupRecord.getMeetings();

    const now = new Date();
    const compareDate = moment(now);

    for await (const meeting of meetingRecord) {
      const startDate = moment(meeting.start);
      const endDate = moment(meeting.end);
      if (compareDate.isBetween(startDate, endDate)) {
        await meeting.increment("tagNumber");
        const tagNumber = meeting.tagNumber;
        const users = await meeting.getUsers();
        if ((tagNumber = users.length)) {
          await meeting.addTag(tagId);
          return { tagRecord: tagRecord, status: 1 };
        } else {
          break;
        }
      }
    }

    // create new meeting logic

    return { tagRecord: tagRecord, status: 0 };
  }
}
