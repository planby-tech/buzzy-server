import FlowerService from "../../services/FlowerService.js";

const flower = new FlowerService();

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

export { generateFlower };
