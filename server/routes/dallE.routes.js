import express from "express";
import * as dotenv from "dotenv";
import PostSchema from "../mongodb/models/Post.js";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
//creating router
const dalleRouter = express.Router();
//setting openai config
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
//creating open ai instance
const openai = new OpenAIApi(configuration);
dalleRouter.get("/", (req, res) => res.send("hello from dalle"));
dalleRouter.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    const image = response.data.data[0].url;
    res.status(200).json({ image: image });
  } catch (err) {
    console.log(err);
  }
});
export default dalleRouter;
