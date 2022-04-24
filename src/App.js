import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import ServerBar from "./discord/Navbar/ServerBar";
import News from "./News/News";
import Checking from "./middlewares/Checking"
const App = () => {
  return (
    <>
      <Routes>
          <Route path="/news" exact component={News} />
          <Route path="/checking" exact component={Checking} />
          <Route path="/serverbar" exact component={ServerBar} />
      </Routes>
    </>
  );
};

export default App;
