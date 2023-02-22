import express from "express";
import * as dotenv from "dotenv";
import Post from "../mongodb/models/Post.js";
import { v2 as cloudinary } from "cloudinary";
const postRouter = express.Router();
dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

postRouter.post("/", async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    const newPost = await new Post({
      name,
      prompt,
      photo: photoUrl.url,
    });
    newPost.save();
    res.status(201).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 500,
    });
  }
});
postRouter.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ error: true, status: 500, message: "Error in db" });
  }
});

export default postRouter;
