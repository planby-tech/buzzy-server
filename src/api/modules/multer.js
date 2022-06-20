import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import path from "path";

const envFound = dotenv.config({ path: path.resolve("../.env") });
if (envFound.error) {
  const envFound2 = dotenv.config();
  if (envFound2.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
  }
}

const s3 = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});

const uploadPostImage = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: "public-read", // Should change the access option (by using server side request)
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `Posts/${req.params.postId}/${Date.now()}_${file.originalname}`);
    },
  }),
});

export { uploadPostImage };

// multer for storing at disk storage
// const storage = multer.diskStorage({
//   destination(req, file, callback) {
//     callback(null, path.resolve("./assets/images"));
//   },
//   filename(req, file, callback) {
//     callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });
