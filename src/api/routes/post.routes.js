import authJwt from "../middleware/AuthJwt.js";
import verifyGroup from "../middleware/VerifyGroup.js";
import {
  createPost,
  readPost,
  updatePost,
  deletePost,
} from "../controllers/PostController.js";
import { upload } from "../modules/multer.js";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/groups/:groupId/meetings/:meetingId/users/:userId/posts",
    [
      authJwt.verifyToken,
      verifyGroup.checkValidMember,
      upload.array("photo", req.params.userId),
    ],
    createPost
  );

  app.get(
    "/groups/:groupId/meetings/:meetingId/posts/:postId",
    [authJwt.verifyToken, verifyGroup.checkValidMember],
    readPost
  );

  app.put(
    "/groups/:groupId/meetings/:meetingId/posts/:postId",
    [
      authJwt.verifyToken,
      verifyGroup.checkValidMember,
      upload.array("photo", req.params.userId),
    ],
    updatePost
  );

  app.delete(
    "/groups/:groupId/meetings/:meetingId/posts/:postId",
    [authJwt.verifyToken, verifyGroup.checkValidMember],
    deletePost
  );
};
