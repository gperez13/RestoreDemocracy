import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css';
import About from './About/About.js';
import Contact from './Contact/Contact.js';
import Donate from './Donate/Donate.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Home from './Home/Home.js';
import Philosophy from './Philosophy/Philosophy.js';
import Mission from './Mission/Mission.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>

            <Route path="/home"  render={(props) => <Home {...props}  />} />
            <Route path="/about"  render={(props) => <About {...props}  />} />
            <Route path="/philosophy"  render={(props) => <Philosophy {...props}  />} />
            <Route path="/mission"  render={(props) => <Mission {...props} />} />
            <Route path="/donate"  render={(props) => <Donate {...props} />} />
            <Route path="/contact"  render={(props) => <Contact {...props}  />} />





            <Footer/>
          </div>
         </Router>









      </div>
    );
  }
}

export default App;
