import React from 'react';
import GraphQLDemo from './GraphQLDemo';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <Router>
        <div className="App">
          <GraphQLDemo />
        </div>
    </Router>
  );
}

export default App;

