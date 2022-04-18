import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trying from "./trying";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/feeds" exact component={Trying} />
          {/* <Route  path="/feeds" exact component= {}/> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
