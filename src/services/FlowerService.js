import db from "../db/models/index.js";

const Op = db.Sequelize.Op;
const flowerArray = [1, 2, 1, 3, 2, 3, 1, 2, 3];

export default class FlowerService {
  async generateFlower(groupId, meeting) {
    const groupRecord = await db.findByPk(groupId);
    const meetingRecord = meeting;

    const flowers = await groupRecord.getFlowers();
    const flowerSize = flowerArray[flowers.length / flowerArray.length];

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
}
