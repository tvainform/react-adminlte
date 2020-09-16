import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";


let mapStateToProps = (state) => {
    return {
        persons: state.personPage,
        newFieldsText: state.personPage.newPersonText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
