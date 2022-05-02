import React from "react";
import { Routes, Route } from "react-router-dom";
import ServerBar from "./discord/Navbar/ServerBar";
import News from "./News/News";
import Checking from "./middlewares/Checking";
import ServerModel from "./discord/Navbar/ServerModel";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/news" exact element={<News />} />
        <Route path="/checking" exact element={<Checking />} />
        <Route path="/serverbar" exact element={<ServerBar />} />
        <Route path="/createserver" exact element={<ServerModel />} />
      </Routes>
    </>
  );
};

export default App;
