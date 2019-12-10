import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";

const GRAPH = [
  { id: 0, name: "Nina", relationship: "friends", links: [1, 2, 3] },
  { id: 1, name: "Anne", relationship: "friends", links: [0, 3] },
  { id: 2, name: "Jennifer", relationship: "friends", links: [0, 1, 3] },
  { id: 3, name: "Christine", relationship: "friends", links: [0, 1, 2] }
];

function find(id) {
  return GRAPH.find(p => p.id === id);
}


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Node />
        </Route>
        <Route path="/">
          <Redirect to="/0" />
        </Route>
      </Switch>
    </Router>
  );
}


const Node = () => {
  let { url } = useRouteMatch();
  let { id } = useParams();
  let node = find(parseInt(id));

  return (
    <div>
      <h3 style={{
        backgroundColor: "#555", 
        color: "#EEE",
        width: "200px"
        }}>{node.name}’s {node.relationship}</h3>

      <ul style={{listStyleType: "none"}} >
        {node.links.map(id => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path={`${url}/:id`}>
          <Node />
        </Route>
      </Switch>
    </div>
  );
}

export default App;