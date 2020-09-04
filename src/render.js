import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addIncident, updateNewIncidentText} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode><App state={state} addIncident={addIncident} updateNewIncidentText={updateNewIncidentText} /></React.StrictMode>, document.getElementById('root')
    );
}

serviceWorker.unregister();
