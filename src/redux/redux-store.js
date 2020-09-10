import {combineReducers, createStore} from "redux";
import incidentReducer from "./incident-reducer";
import personReducer from "./person-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    incidentPage: incidentReducer,
    personPage: personReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;
