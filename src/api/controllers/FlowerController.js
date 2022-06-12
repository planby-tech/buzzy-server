import FlowerService from "../../services/FlowerService.js";
import MeetingService from "../../services/MeetingService.js";
import PostService from "../../services/PostService.js";

const flower = new FlowerService();
const meeting = new MeetingService();
const post = new PostService();

const generateFlower = (req, res) => {
  const groupId = req.params.groupId;
  const meeting = req.body.meeting;
  flower
    .generateFlower(groupId, meeting)
    .then((flower) => {
      res.json({
        message: "Flower was generated successfully!",
        flower: flower,
      });
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const readFlower = (req, res) => {
  const groupId = req.params.groupId;
  const flowerId = req.params.flowerId;
};

export { generateFlower, readFlower };
