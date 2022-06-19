import { uploadPostImage } from "../modules/multer.js";
import { uploadPost } from "../controllers/ImageController.js";

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
};
