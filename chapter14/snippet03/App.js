import React from 'react';
import ApolloExpressDemo from './ApolloExpressDemo';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <Router>
        <div className="App">
          < ApolloExpressDemo />
        </div>
    </Router>
  );
}

export default App;
