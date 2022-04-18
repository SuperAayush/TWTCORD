import axios from "axios";

const url = "http://localhost:8000/feeds";

export const fetchFeeds = () => axios.get(url);
export const createFeeds = (newFeeds) => axios.post(url, newFeeds);
