import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link
} from "react-router-dom";

import {LoginButton, LoginPage, PrivateRoute} from './login';
import GeneralInfo from './GeneralInfo';
import UserPortal from './UserPortal';

import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <LoginButton />
        <ul className="navbar">
          <li>
            <Link exact={true} to="/">General Information</Link>
          </li>
          <li>
            <Link to="/yourportal">Your Portal</Link>
          </li>
        </ul>

        <Switch>
          <Route exact={true} path="/">
            <GeneralInfo />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/yourportal">
            <UserPortal />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;