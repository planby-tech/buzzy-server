import db from "../db/models/index.js";
import { addHours, UTC } from "../helpers/DateConverter.js";

export default class TagService {
  async tagging(userId, groupId, tagUid) {
    console.log(tagUid);
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
