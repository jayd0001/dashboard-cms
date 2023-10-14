import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard';

function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route component={Dashboard} exact path="/dashboard" />
    </Switch>
  );
}

export default Routes;