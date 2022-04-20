import ServerProfile from "./ServerProfile";
import Carousel from "react-elastic-carousel";
import SearchIcon from "@mui/icons-material/Search";
import "./serverbar.scss";

const ServerBar = () => {
  return (
    <div className="serverbar">
      <div className="centerbar">
        <Carousel
          itemsToShow={9}
          showEmptySlots={false}
          pagination={false}
          enableMouseSwipe={true}
        >
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
