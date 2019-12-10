import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
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
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route path='/about' component={AboutUs} />
          <Route path='/contact' component={ContactUs} />  
        </Switch>      
      </div>
    </Router>
  );
}

export default App;
