import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Home from "../Screens/Home";
import Missio from "../Screens/Missio";

const MainRouter = withRouter(( { location }) => {
  return (
    <Router>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="zoom" timeout={1000}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/missio" component={Missio} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  )
})

export default MainRouter

