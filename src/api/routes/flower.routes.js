import authJwt from "../middleware/AuthJwt.js";
import verifyGroup from "../middleware/VerifyGroup.js";
import { readFlower } from "../controllers/FlowerController.js";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/groups/:groupId/flowers/:flowerId",
    [authJwt.verifyToken, verifyGroup.checkValidMember],
    readFlower
  );
};
