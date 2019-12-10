import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  NavLink as Link,
} from 'react-router-dom';

import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul className="navbar">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
       

          <Route exact={true} path='/' component={Home} />
          <Route path='/about' component={AboutUs} />
          <Route path='/contact' component={ContactUs} />  

        </div>
    </Router>
  );
}

export default App;
