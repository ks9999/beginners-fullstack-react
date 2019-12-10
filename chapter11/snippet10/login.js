import React from "react";
import {
  Route,
 
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

let simpleAuth = {
    isAuthenticated: false,
    authenticate(customFunc) {
      simpleAuth.isAuthenticated = true;
      setTimeout(customFunc, 100); // fake async
    },
    signout(customFunc) {
      simpleAuth.isAuthenticated = false;
      setTimeout(customFunc, 100);
    }
  };

  export function LoginButton() {
    let history = useHistory();
  
    return simpleAuth.isAuthenticated ? (
      <p className="info">
        Click on this button to sign out
        <button
          onClick={() => {
            simpleAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p className="info">You are not logged in. Click on Your Portal to view your login options.</p>
    );
  }

  export function LoginPage() {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
  
    let login = () => {
      simpleAuth.authenticate(() => {
        history.replace(from);
      });
    };
  
    return (
      <div className="navpage">
        <p>You must log in to view the page at <b>{from.pathname}</b>.</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  }

  export function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          simpleAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
