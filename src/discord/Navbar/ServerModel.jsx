import { Button, Typography } from "@mui/material";
import React from "react";
import "./Model.scss";

const ServerModel = () => {
  return (
    <div className="overlay">
      <div className="container ">
        <div className="main">
          <Typography variant="h1" className="heading">
            Customize Your Server
          </Typography>
          <Typography variant="subtitle2" className="description">
            Give your new server a personality with a name and an icon.
            <br />
            You can always change it later.
          </Typography>

          <div className="image">
            <img
              src="https://www.pngarts.com/files/2/Upload-Transparent-Images.png"
              alt="upload"
              className="uploadImage"
            />
            <span className="hoverImage">Upload Image</span>
          </div>

          <div className="form">
            <label htmlFor="server-name">SERVER NAME</label>
            <input placeholder="User's Server" id="server-name"></input>
          </div>

          <Typography className="guidelines">
            By creatng a server,you agree to Twtcord's{" "}
            <span> Community Guidelines.</span>
          </Typography>
        </div>
        <div className="footer">
          <Typography className="text">Back</Typography>
          <Button variant="contained">Create</Button>
        </div>
      </div>
    </div>
  );
};

export default ServerModel;
