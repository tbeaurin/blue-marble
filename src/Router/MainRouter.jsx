import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import Home from '../Screens/Home';
import Missio from '../Screens/Missio';
import Zones from '../Screens/Zones';

const MainRouter = withRouter(({ location }) => (
  <Router>
    <TransitionGroup>
      <Switch location={location}>
        <Route path="/" component={Home} exact />
        <Route path="/missio" component={Missio} />
        <Route path="/zones" component={Zones} />
      </Switch>
    </TransitionGroup>
  </Router>
));

export default MainRouter;
