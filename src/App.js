import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Main from './Components/Main';
import About from './Components/About';
import Persons from './Components/Persons/Persons';
import Coveralls from './Components/Coveralls';
import Error404 from './Components/Error404';
import Calendar from './Components/Calendar';


function App() {
  return (
<Router>
  <Header/>
  <Menu/>
  <div className="content-wrapper">
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/personal" component={Persons}/>
      <Route exact path="/coveralls" component={Coveralls}/>
      <Route exact path="/calendar" component={Calendar}/>
      <Route component={Error404}/>
    </Switch>
  </div>
  <Footer/>
</Router>
  );
}

export default App;
