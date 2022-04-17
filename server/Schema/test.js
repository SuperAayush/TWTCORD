import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("posts", PostSchema);

export default Post;
