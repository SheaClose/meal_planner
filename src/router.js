import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './Components/Home/Home.js';
import AddItem from './Components/AddItem/AddItem';
import Auth from './Auth/Auth';

const auth = new Auth();

export default (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/AddItem" component={AddItem} />
      <Route
        component={props => {
          auth.handleAuthentication(props);
          return null;
        }}
      />
    </Switch>
  </HashRouter>
);
