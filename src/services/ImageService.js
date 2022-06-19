import db from "../db/models/index.js";

export default class ImageService {
  async uploadPost(postId, imageDTO) {
    const postRecord = await db.Post.findByPk(postId);
    const userRecord = await db.User.findByPk(postRecord.userId);
    const meetingRecord = await db.Meeting.findByPk(postRecord.meetingId);
    const groupRecord = await db.Group.findByPk(meetingRecord.groupId);

    const imageRecord = await Promise.all(
      imageDTO.map((image) => {
        db.Image.create({
          url: image.location,
        });
      })
    );

    await postRecord.addImages(imageRecord);
    await userRecord.addImages(imageRecord);
    await meetingRecord.addImages(imageRecord);
    await groupRecord.addImages(imageRecord);

    return imageRecord;
  }
}
