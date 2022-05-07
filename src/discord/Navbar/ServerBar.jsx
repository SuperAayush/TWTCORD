import ServerProfile from "./ServerProfile";
import Carousel from "react-elastic-carousel";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import "./serverbar.scss";
import { useEffect, useState } from "react";

import { getServer } from "./API/API.js";

const ServerBar = () => {
  const [Servers, setServers] = useState([]);

  useEffect(() => {
    const getservers = async () => {
      const res = await getServer();
      setServers(res);
    };
    getservers();
  }, []);

  const breakPoints = [
    { width: 500, itemsToShow: 4 },
    { width: 768, itemsToShow: 5, showArrows: false },
    { width: 1400, itemsToShow: 7 },
  ];

  return (
    <div className="serverbar">
      <div className="centerbar">
        <Carousel
          pagination={false}
          breakPoints={breakPoints}
          className="caraousel"
        >
          {Servers.map((server, index) => {
            return (
              <ServerProfile server={server} key={index} className="tooltip" />
            );
          })}

          <div className="addserver">
            <AddIcon />
          </div>
        </Carousel>
      </div>

      <div className="leftbar">
        <SearchIcon className="icon" />
        <img
          src="https://www.grovenetworks.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
          alt="profile"
          className="profileimage"
        />
      </div>
    </div>
  );
};

export default ServerBar;
