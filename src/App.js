import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./News/News";
import Checking from "./middlewares/Checking"
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/news" exact component={News} />
          <Route path="/checking" exact component={Checking} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
