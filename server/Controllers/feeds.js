import Feeds from "../Schema/feeds.js";

export const getFeeds = async (req, res) => {
  try {
    const AllFeeds = await Feeds.find();

    res.status(200).json(AllFeeds);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
