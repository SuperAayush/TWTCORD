import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Trying from './trying'
const App = () => {
  return (
    <>
   
    <Router>
			<Switch>
					<Route  path="/" exact component= {Trying}/>
        </Switch>
    </Router>

    </>
  )
}

export default App