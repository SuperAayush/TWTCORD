import express from "express";
import bcrypt from "bcryptjs";
import Post from "../Schema/test.js"; 
import User from "../Schema/userSchema.js";
import authenticate from "../middleware/authenticate.js";
import { createFeeds, getFeeds } from "../Controllers/feeds.js";


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

Router.post('/register', async (req,res) => {
    
    const userDetails = req.body;

    try{
        const userExist = await User.findOne({email:userDetails.email});
        const userNameExist = await User.findOne({username:userDetails.username});

        if(userExist) {
                return res.status(422).json({error:"*user already exists"});
        }
        else if( userNameExist){
                return res.status(422).json({error:"*username already exists"});
        }
        else if( userDetails.password !== userDetails.cpassword){
                return res.status(422).json({error:"*password are not matching"});
        }
        else{
            const user = new User(userDetails);
            await user.save();
            res.status(201).json({message:"User Registered successfully"});
        }
    } catch(err){ 
        console.log(err)
    }
});


// route for login using username or email

Router.post('/signin', async (req,res) => {
    try{
        const credentials = req.body;

        const userLoginEmail = await User.findOne({email:credentials.email});
        const userLoginUsername = await User.findOne({username:credentials.username});

        if(userLoginUsername){
            const isMatch = await bcrypt.compare(credentials.password, userLoginUsername.password);

            const token = await userLoginUsername.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 1000000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({err:"Invalid Credentials"});
            }else{
                res.json({message:"Sign in successfully"});
            }
        }
        else if(userLoginEmail){
            const isMatch = await bcrypt.compare(credentials.password, userLoginEmail.password);

            const token = await userLoginEmail.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 1000000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({err:"Invalid Credentials"});
            }else{
                res.json({message:"Sign in successfully"});
            }
        }
        else{
            res.status(400).json({err:"Invalid Credentials"});
        }
    
    } catch(err){
        console.log(err);
    }
});

//route for checking, that the user is logged in or not

Router.get('/checking', authenticate, (req, res)=>{
    res.send(req.rootUser);
});

Router.get("/feeds", getFeeds);
Router.post("/feeds", createFeeds);

export default Router;
