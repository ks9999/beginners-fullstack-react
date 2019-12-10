import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

const routes = [
  {
    path: "/",
    exact: true,
    linkText: "Announcements",
    sidebar: () => <div>Sidebar: {routes[0].linkText}</div>,
    main: () => <h2>{routes[0].linkText}</h2>
  },
  {
    path: "/examples",
    exact: true,
    linkText: "Examples",
    sidebar: () => <div>Sidebar: {routes[1].linkText}</div>,
    main: () => <h2>{routes[1].linkText}</h2>
  },
  {
    path: "/animation",
    exact: true,
    linkText: "Animation",
    sidebar: () => <div>Sidebar: {routes[2].linkText}</div>,
    main: () => <h2>{routes[2].linkText}</h2>
  },
  {
    path: "/api",
    exact: true,
    linkText: "API",
    sidebar: () => <div>Sidebar: {routes[3].linkText}</div>,
    main: () => <h2>{routes[3].linkText}</h2>
  }
];

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div className="navpage">
          <ul className="navsidebar">
            {routes.map((route, index) => (
              <li>
                <Link to={route.path}>{route.linkText}</Link>
              </li>
            ))}
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div className="sidepage">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
