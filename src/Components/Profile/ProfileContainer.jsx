import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from 'react-redux';
import {setUserProfile} from "../../redux/profile-reducer";


class ProfileContainer extends Component {
    componentDidMount() {
        /*this.props.toggleIsFetching(true);*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>);
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
