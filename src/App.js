import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Aside from './Components/Aside/Aside';
import Main from './Components/Main';
import About from './Components/About';
import Persons from './Components/Persons/Persons';
import Coveralls from './Components/Coveralls';
import Error404 from './Components/Error404';
import Calendar from './Components/Calendar';
import Incidents from "./Components/Incidents/Incidents";
import ContentHeader from "./Components/ContentHeader/ContentHeader";


const App = (props) => {
  return (
      <BrowserRouter>
        <Header/>
        <Aside/>
        <div className="content-wrapper">
          <ContentHeader/>
          <Switch>
            <Route exact path="/" render={() => <Main />}/>
            <Route exact path="/about" render={() => <About />}/>
            <Route exact path="/persons" render={() => <Persons state={props.state}/>}/>
            <Route exact path="/coveralls" render={() => <Coveralls/>}/>
            <Route exact path="/calendar" render={() => <Calendar/>}/>
            <Route exact path="/incidents" render={() => <Incidents state={props.state.incidentTable} addIncident={props.addIncident} updateNewIncidentText={props.updateNewIncidentText} />}/>
            <Route render={() => <Error404/>}/>
          </Switch>
        </div>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
