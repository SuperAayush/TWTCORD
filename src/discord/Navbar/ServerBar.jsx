import ServerProfile from "./ServerProfile";
import Carousel from "react-elastic-carousel";
import SearchIcon from "@mui/icons-material/Search";
import "./serverbar.scss";
import { useEffect, useState } from "react";

import { getServer } from "./API/API.js";

const ServerBar = () => {
  const [Servers, setServers] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const length = Servers.length;

  useEffect(() => {
    const getservers = async () => {
      const res = await getServer();
      setServers(res);
    };
    getservers();
  }, []);

  return (
    <div className="serverbar">
      <div className="centerbar">
        <Carousel
          itemsToShow={9}
          showEmptySlots={false}
          pagination={false}
          enableMouseSwipe={true}
        >
          {Servers.map((server, index) => {
            return <ServerProfile server={server} key={index} />;
          })}
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
