import express from "express";
import Post from "../Schema/test.js";
import { createFeeds, getFeeds } from "../Controllers/feeds.js";

const Router = express.Router();

Router.post("/check", async (req, res) => {
  try {
    console.log(req.body);
    const data = await new Post(req.body);

    data.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

Router.get("/feeds", getFeeds);
Router.post("/feeds", createFeeds);

export default Router;
