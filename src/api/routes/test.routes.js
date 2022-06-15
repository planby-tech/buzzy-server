import db from "../../db/models/index.js";
import { upload } from "../modules/multer.js";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/user", async (req, res) => {
    const User = db.User;
    const user = await User.findOne({
      where: {
        email: "heonsub6558@gmail.com",
      },
    });
    return res.json({ user: user });
  });

  app.post("/image", upload.array("photo", 3), (req, res) => {
    console.log("get image");
    const image = req.files;
    const path = image.map((img) => img.path);
    res.status(200).json({
      message: "success!",
      path: path,
    });
  });
};
