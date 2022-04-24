import User from '../Schema/userSchema.js';
import bcrypt from "bcryptjs";

const signIn = async (req, res) => {
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
};

export default signIn;