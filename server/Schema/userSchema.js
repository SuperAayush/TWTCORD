import mongoose from "mongoose";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    date_of_birth:{
        type: Date,
        trim: true,
    },
    gender:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    password:{      
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    tokens:[
        { 
            token:{
                type: String,
                required: true
            }
        }
    ]
});


//passwords converts using hashing into combinations of letters and numbers using bcrypt

userSchema.pre('save',async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword =await bcrypt.hash(this.cpassword, 12);
        console.log("hashing")
    }
    next();
});


//finds user by token

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}

const User=mongoose.model('USER', userSchema);
export default User;