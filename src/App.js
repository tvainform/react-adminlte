import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Main from './Pages/Main';
import About from './Pages/About';
import Personal from './Pages/Personal';
import Coveralls from './Pages/Coveralls';
import Error404 from './Pages/Error404';
import Calendar from './Pages/Calendar';


function App() {
  return (
    <>
<Router>
  <Header/>
  <Menu/>
  <div className="content-wrapper">
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/personal" component={Personal}/>
      <Route exact path="/coveralls" component={Coveralls}/>
      <Route exact path="/calendar" component={Calendar}/>
      <Route component={Error404}/>
    </Switch>
  </div>
  <Footer/>
</Router>
    </>
  );
}

export default App;
