import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "../Screens/Home";
import Missio from "../Screens/Missio";

const MainRouter = () => {

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/missio">
          <Missio />
        </Route>
      </Switch>
    </Router>
  )
}

export default MainRouter
