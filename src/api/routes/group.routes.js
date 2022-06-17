import authJwt from "../middleware/AuthJwt.js";
import verifyGroup from "../middleware/VerifyGroup.js";
import {
  createGroup,
  readGroup,
  updateGroup,
  deleteGroup,
  joinGroup,
  findUsers,
  findMeetings,
  findItems,
} from "../controllers/GroupController.js";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/users/:userId/groups", [authJwt.verifyToken], createGroup);

  app.get(
    "/users/:userId/groups/:groupId",
    [authJwt.verifyToken, verifyGroup.checkValidMember],
    readGroup
  );

  app.put(
    "/users/:userId/groups/:groupId",
    [authJwt.verifyToken, verifyGroup.checkValidMember],
    updateGroup
  );

  app.delete(
    "/users/:userId/groups/:groupId",
    [authJwt.verifyToken, verifyGroup.checkValidMember],
    deleteGroup
  );

  app.patch(
    "/users/:userId/groups/:groupCode",
    [authJwt.verifyToken],
    joinGroup
  );

  app.get(
    "/users/:userId/groups/:groupId/users",
    [authJwt.verifyToken, verifyGroup.checkValidMember],
    findUsers
  );

  app.get(
    "/users/:userId/groups/:groupId/meetings",
    [authJwt.verifyToken, verifyGroup.checkValidMember],
    findMeetings
  );

  app.get(
    "/users/:userId/groups/:groupId/items",
    [authJwt.verifyToken, verifyGroup.checkValidMember],
    findItems
  );
};
