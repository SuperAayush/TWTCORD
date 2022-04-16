import express from "express";
import Post from "../Schema/test.js";

const Router = express.Router();

let allpost;

Router.post("/check", async (req, res) => {
  try {
    allpost = await req.body;

    console.log(req.body);
    const data = await new Post(req.body);

    data.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default Router;
