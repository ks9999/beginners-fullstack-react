import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/contact' component={ContactUs} />        
      </div>
    </Router>
  );
}

export default App;
