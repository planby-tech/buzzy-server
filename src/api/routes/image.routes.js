import { uploadPostImage } from "../modules/multer.js";
import authJwt from "../middleware/AuthJwt.js";
import verifyGroup from "../middleware/VerifyGroup.js";
import { uploadPost, readPost } from "../controllers/ImageController.js";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/posts/:postId/images",
    uploadPostImage.array("post", 10),
    uploadPost
  );

  app.get(
    "/groups/:groupId/flowers/:flowerId/images",
    [authJwt.verifyToken, verifyGroup.checkValidMember],
    readPost
  );
};
