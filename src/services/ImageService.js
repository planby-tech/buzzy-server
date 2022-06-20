import dotenv from "dotenv";
import path from "path";
import axios from "axios";
import db from "../db/models/index.js";

const envFound = dotenv.config();
if (envFound.error) {
  const envFound2 = dotenv.config({ path: path.resolve("../.env") });
  if (envFound2.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
  }
}

export default class ImageService {
  async uploadPost(postId, imageDTO) {
    const postRecord = await db.Post.findByPk(postId);
    const userRecord = await db.User.findByPk(postRecord.userId);
    const meetingRecord = await db.Meeting.findByPk(postRecord.meetingId);
    const groupRecord = await db.Group.findByPk(meetingRecord.groupId);
    const imageRecord = [];

    for await (const image of imageDTO) {
      const img = await db.Image.create({
        location: image.location,
      });
      imageRecord.push(img);
    }

    await postRecord.addImages(imageRecord);
    await userRecord.addImages(imageRecord);
    await meetingRecord.addImages(imageRecord);
    await groupRecord.addImages(imageRecord);

    return imageRecord;
  }

  async readPost(groupId, flowerId) {
    const meetingRecord = await db.Meeting.findOne({
      where: {
        groupId: groupId,
        flowerId: flowerId,
      },
    });
    const images = await meetingRecord.getImages();
  }
}
