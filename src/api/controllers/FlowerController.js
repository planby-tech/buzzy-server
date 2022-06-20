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
        post: req.body.post,
      });
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const findPosts = (req, res) => {
  const groupId = req.params.groupId;
  const flowerId = req.params.flowerId;
  flower
    .findPosts(groupId, flowerId)
    .then(({ meeting, posts }) => {
      res.json({
        meeting: meeting,
        posts: posts,
      });
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

export { generateFlower, findPosts };
