import {combineReducers, createStore} from "redux";
import incidentReducer from "./incident-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    incidentPage: incidentReducer,
    usersPage: usersReducer,
    profilePage: profileReducer
})

let store = createStore(reducers);

export default store;
