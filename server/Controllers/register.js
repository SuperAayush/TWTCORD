import User from "../Schema/userSchema.js";


const register = async (req, res) => {
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
};

export default register;
