import mongoose from "mongoose";

const FeedSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  dp: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  selectedFile: {
    type: String,
  },
  like: {
    type: String,
    default: 0,
  },
  comment: {
    type: [String],
  },
  dateCreated: {
    type: Date,
    default: new Date(),
  },
  tags: {
    type: [String],
    required: true,
  },
});

const Feeds = mongoose.model("Feeds", FeedSchema);

export default Feeds;
