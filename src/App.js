import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ServerBar from "./discord/Navbar/ServerBar";
import News from "./News/News";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/news" exact element={News} />
          <Route path="/serverbar" exact element={ServerBar} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
