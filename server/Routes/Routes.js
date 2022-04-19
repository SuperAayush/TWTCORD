import express from "express";
import Post from "../Schema/test.js";
import User from "../Schema/userSchema.js";
import { createFeeds, getFeeds } from "../Controllers/feeds.js";
import {
  createChannel,
  createServer,
} from "../Controllers/serverControllers.js";

const Router = express.Router();

// eslint-disable-next-line no-unused-vars
let allpost;

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

// route for registring a user

Router.post("/register", async (req, res) => {
  const userDetails = req.body;

  try {
    const userExist = await User.findOne({ email: userDetails.email });
    const userNameExist = await User.findOne({
      username: userDetails.username,
    });

    if (userExist) {
      return res.status(422).json({ error: "*user already exists" });
    } else if (userNameExist) {
      return res.status(422).json({ error: "*username already exists" });
    } else if (userDetails.password !== userDetails.cpassword) {
      return res.status(422).json({ error: "*password are not matching" });
    } else {
      const user = new User(userDetails);
      await user.save();
      res.status(201).json({ message: "User Registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//Feeds Routes
Router.get("/feeds", getFeeds);
Router.post("/feeds", createFeeds);

//Server Routes
Router.post("/createserver", createServer);

//Channel Routes
Router.post("/createchannel", createChannel);

export default Router;
