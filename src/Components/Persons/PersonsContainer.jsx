import React from 'react';
import {connect} from "react-redux";
import Persons from "./Persons";


let mapStateToProps = (state) => {
    return {
        persons: state.personPage,
        newFieldsText: state.personPage.newPersonText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}
const PersonsContainer = connect(mapStateToProps, mapDispatchToProps)(Persons);

export default PersonsContainer;
