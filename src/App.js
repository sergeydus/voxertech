import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Careers from './pages/Careers'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import OurOffice from './pages/OurOffice'
// import Our-Office from '././pages/Our-office
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>

      <div className="App" style={{height:'100%',width:'100%'}}>
          <Header />
          <Switch>
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/our-office" component={OurOffice} />
            <Route exact path="/" component={Home} />
            <Route path="*">
              <h1>404 NOT FOUND</h1>
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
