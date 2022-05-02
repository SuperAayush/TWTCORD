import React from "react";
import "./serverprofile.scss";

const ServerProfile = (server) => {
  //to get images use server.server.serverProfile
  return (
    <div className="profile">
      <img src={server.server.serverProfile} alt="serverProfile" />
    </div>
  );
};

export default ServerProfile;
