import Servers from "../Schema/serverschema.js";
import Channels from "../Schema/textChannels.js";

//Create New Server
export const createServer = async (req, res) => {
  try {
    const serverdata = await new Servers(req.body);
    serverdata.save();
    res.status(200).json(serverdata);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Create new Channel
export const createChannel = async (req, res) => {
  try {
    const channelData = await new Channels(req.body);
    channelData.save();
    res.status(200).json(channelData);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const GetServer = async (req, res) => {
  try {
    const response = await Servers.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
};
