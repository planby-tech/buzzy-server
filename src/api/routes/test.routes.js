import db from "../../db/models/index.js";
import { upload } from "../modules/multer.js";

// const s3 = new AWS.S3({
//   accessKeyId: process.env.S3_ACCESS_KEY_ID,
//   secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
// });

// const uploadFile = (fileBlob, meetingId, postId, imageIndex) => {
//   const params = {
//     Bucket: process.env.S3_BUCKET_NAME,
//     Key: `${meetingId}/${postId}/${imageIndex}`,
//     Body: fileBlob,
//   };
//   s3.upload(params, (s3Err, data) => {
//     if (s3Err) throw s3Err;
//     return data.Location;
//   });
// };

// const storage = multer.diskStorage({
//   destination(req, file, callback) {
//     callback(null, path.resolve("./assets/images"));
//   },
//   filename(req, file, callback) {
//     callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });

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
    const image = req.files;
    const path = image.map((img) => img.path);
    res.status(200).json({
      message: "success!",
      path: path,
    });
  });
};
