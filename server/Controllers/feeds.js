import Feeds from "../Schema/feeds.js";

export const getFeeds = async (req, res) => {
  try {
    const AllFeeds = await Feeds.find();

    res.status(200).json(AllFeeds);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createFeeds = async (req, res) => {
  const feeds = req.body;
  const newFeed = new Feeds(feeds);
  console.log(feeds);

  try {
    await newFeed.save();
    res.status(201).json(newFeed);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
