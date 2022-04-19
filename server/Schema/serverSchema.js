import mongoose from "mongoose";

const serverSchema = new mongoose.Schema({
  serverName: {
    type: String,
    required: true,
  },
  serverProfile: {
    type: String,
  },
  serverMembers: {
    type: Array,
  },
  serverTextChannels: {
    type: Array,
  },
  serverOwner: {
    type: String,
  },
  serverVoiceChannels: {
    type: Array,
  },
});

const Servers = mongoose.model("servers", serverSchema);

export default Servers;
