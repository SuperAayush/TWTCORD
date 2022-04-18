import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./News/News";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/news" exact component={News} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
