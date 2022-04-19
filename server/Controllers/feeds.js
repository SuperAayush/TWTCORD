import Feeds from "../Schema/feeds.js";

export const getFeeds = async (req, res) => {
  //Creating a getFeeds function to fetch data database
  try {
    const AllFeeds = await Feeds.find();

    res.status(200).json(AllFeeds);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createFeeds = async (req, res) => {
  //Pushing post data to the Database
  const feeds = req.body;
  const newFeed = await new Feeds(feeds);
  console.log(feeds);

  try {
    newFeed.save(); //saving data in Azure
    res.status(201).json(newFeed);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
