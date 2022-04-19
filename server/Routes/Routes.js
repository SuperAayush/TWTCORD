import express from "express";
import Post from "../Schema/test.js"; 
import authenticate from "../middleware/authenticate.js";
import { createFeeds, getFeeds } from "../Controllers/feeds.js";
import signIn from "../Controllers/signIn.js";
import register from "../Controllers/register.js";
import { addMessage, getMessages } from "../controllers/messageController";
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
Router.post("/register", register);

// route for login using username or email
Router.post("/signin", signIn);


//route for checking, that the user is logged in or not
Router.get('/checking', authenticate, (req, res)=>{
    res.send(req.rootUser);
});


// Feeds 
Router.get("/feeds", getFeeds);
Router.post("/feeds", createFeeds);

// Add messages for receiver and sender 
Router.post("/addmsg/", addMessage); 
Router.post("/getmsg/", getMessages);

//Feeds Routes
Router.get("/feeds", getFeeds);
Router.post("/feeds", createFeeds);

//Server Routes
Router.post("/createserver", createServer);

//Channel Routes
Router.post("/createchannel", createChannel);


export default Router;
