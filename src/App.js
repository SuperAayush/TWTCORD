import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Trying from './trying'
import News from './News/News'
const App = () => {
  return (
    <>
   
    <Router>
			<Switch>
					<Route  path="/" exact component= {Trying}/>
          <Route  path="/news" exact component= {News}/>
        </Switch>
    </Router>

    </>
  )
}

export default App