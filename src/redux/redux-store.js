import {combineReducers, createStore} from "redux";
import incidentReducer from "./incident-reducer";
import personReducer from "./person-reducer";

let reducers = combineReducers({
    incidentTable: incidentReducer,
    personTable: personReducer
})

let store = createStore(reducers);

export default store;
