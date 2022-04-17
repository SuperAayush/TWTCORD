import axios from "axios";

const url = "http://localhost:8000/feeds";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post;
