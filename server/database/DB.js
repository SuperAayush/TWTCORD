import mongoose from "mongoose";

const connection = async (URL) => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected To Azure");
  } catch (error) {
    console.log("Error While Connecting to MongoDb", error);
  }
};

export default connection;
