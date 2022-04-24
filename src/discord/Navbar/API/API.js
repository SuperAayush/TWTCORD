import axios from "axios";

const URl = "http://localhost:8000/";

export const getServer = async () => {
  const res = await axios.get(`${URl}getserver`);
  return res.data;
};
