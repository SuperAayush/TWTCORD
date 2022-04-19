import React, { useRef, useState } from "react";
import ServerProfile from "./ServerProfile";
import Carousel from "react-elastic-carousel";
import "./serverbar.scss";

const ServerBar = () => {
  return (
    <div className="serverbar">
      <div className="centerbar">
        <Carousel itemsToShow={8} showEmptySlots={false} pagination={false}>
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
          <ServerProfile />
        </Carousel>
      </div>

      <div className="leftbar"></div>
    </div>
  );
};

export default ServerBar;
