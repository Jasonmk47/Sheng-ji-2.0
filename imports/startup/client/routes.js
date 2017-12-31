import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import Homepage from '../../ui/scenes/Homepage/Homepage.js';
import GameBoard from '../../ui/scenes/Gameboard/Gameboard.js';

const browserHistory = createBrowserHistory();

const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/Game/*" component={GameBoard} />
    </div>
  </Router>
);

export { renderRoutes as default };
