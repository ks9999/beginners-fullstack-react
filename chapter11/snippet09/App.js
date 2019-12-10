import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link
} from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import News from "./News";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <ul className="navbar">
          <li>
            <Link exact={true} to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>

        <div className="navpage">
          <Switch>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path='/contact'>
              <ContactUs />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
