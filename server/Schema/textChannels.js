import mongoose from "mongoose";

const textChannelSchema = new mongoose.Schema({
  channelName: {
    type: String,
    required: true,
  },
  newMessage: [{ user: String, message: String }],
  serverName: {
    type: String,
    required: true,
  },
});

const Channels = mongoose.model("channels", textChannelSchema);

export default Channels;
