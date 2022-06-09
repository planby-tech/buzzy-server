import authJwt from "../middleware/AuthJwt.js";
import verifyGroup from "../middleware/VerifyGroup.js";
import { addTag } from "../controllers/TagController.js";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/groups/:groupId/tags/:tagId",
    [authJwt.verifyToken, verifyGroup.checkValidMember],
    addTag
  );
};
