import db from "../../db/models/index.js";

// should change to req.params.userId (by routes)
const checkValidMember = (req, res, next) => {
  db.Group.findByPk(req.params.groupId)
    .then((group) => {
      if (group.hasUser(req.userId)) {
        next();
      } else {
        res.status(401).send("This user is not allowed to access group!");
      }
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const checkValidWriter = (req, res, next) => {
  db.Comment.findByPk(req.params.commentId)
    .then((comment) => {
      if (comment.userId === req.userId) {
        next();
      } else {
        return res.status(401).send("Unauthorized!");
      }
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const verifyGroup = {
  checkValidMember: checkValidMember,
  checkValidWriter: checkValidWriter,
};

export default verifyGroup;
