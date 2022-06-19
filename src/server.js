import express from "express";
import cors from "cors";
import { Server, Socket } from "socket.io";
import http from "http";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import authRouter from "./api/routes/auth.routes.js";
import userRouter from "./api/routes/user.routes.js";
import groupRouter from "./api/routes/group.routes.js";
import meetingRouter from "./api/routes/meeting.routes.js";
import questionRouter from "./api/routes/question.routes.js";
import postRouter from "./api/routes/post.routes.js";
import commentRouter from "./api/routes/comment.routes.js";
import socketRouter from "./api/routes/socket.routes.js";
import tagRouter from "./api/routes/tag.routes.js";
import flowerRouter from "./api/routes/flower.routes.js";
import testRouter from "./api/routes/test.routes.js";
import db from "./db/models/index.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const envFound = dotenv.config();
if (envFound.error) {
  const envFound2 = dotenv.config({ path: path.resolve("../.env") });
  if (envFound2.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
  }
}

const PORT = process.env.PORT || 8000;
const API_HOST = process.env.API_HOST || "http://localhost";
let corsOptions = {
  origin: API_HOST + ":" + PORT,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

// root
app.get("/", (req, res) => {
  res.json({ message: "Welcome to planby application." });
});

await db.sequelize.authenticate();

// routes
authRouter(app);
userRouter(app);
groupRouter(app);
meetingRouter(app);
questionRouter(app);
postRouter(app);
commentRouter(app);
tagRouter(app);
flowerRouter(app);
testRouter(app);
socketRouter(io);

// development mode
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync DB");
// });

// db.sequelize.sync();

// listen for requests
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
