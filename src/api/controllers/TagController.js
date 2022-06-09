import TagService from "../../services/TagService.js";

const tag = new TagService();

const addTag = (req, res) => {
  const userId = req.userId;
  const groupId = req.params.groupId;
  const tagId = req.params.tagId;
  tag
    .addTag(userId, groupId, tagId)
    .then(({ tagRecord, status }) => {
      res.json({
        message: "User was added to tag successfully!",
        tag: tagRecord,
        status: status,
      });
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

export { addTag };
