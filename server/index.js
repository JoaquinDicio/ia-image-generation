import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./mongodb/connect.js";
import postRouter from "./routes/post.routes.js";
import dalleRouter from "./routes/dallE.routes.js";

dotenv.config();
const app = express();
//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/post", postRouter);
app.use("/api/v1/dalle", dalleRouter);

//connection and start
const startSv = async () => {
  try {
    connectDb();
    app.listen(8080, () => console.log("Server listening 8080"));
  } catch (err) {
    console.log(err);
  }
};

startSv();
