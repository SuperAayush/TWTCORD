import React from "react";
import { Routes, Route } from "react-router-dom";
import ServerBar from "./discord/Navbar/ServerBar";
import News from "./News/News";
import Checking from "./middlewares/Checking";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/news" exact element={<News />} />
        <Route path="/checking" exact element={<Checking />} />
        <Route path="/serverbar" exact element={<ServerBar />} />
      </Routes>
    </>
  );
};

export default App;
