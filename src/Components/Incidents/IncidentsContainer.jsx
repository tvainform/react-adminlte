import React from 'react';
import {addIncidentActionCreator, updateNewIncidentTextActionCreator} from "../../redux/incident-reducer";
import Incidents from "./Incidents";


const IncidentsContainer = (props) => {
    let state = props.store.getState();

    let onAddIncident = () => {
        props.store.dispatch(addIncidentActionCreator());
    }
debugger
    let onIncidentChange = (text) => {
        props.store.dispatch(updateNewIncidentTextActionCreator(text));
    }
    return (
   <Incidents addIncident={onAddIncident} updateNewIncidentText={onIncidentChange} incidents={state.incidentTable}/>
    );
}
export default IncidentsContainer;
