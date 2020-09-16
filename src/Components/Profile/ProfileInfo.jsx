import React from 'react';
import {NavLink} from 'react-router-dom';
import Follow from "./Follow";
import AboutMe from "./AboutMe";
import Activity from "./Activity";
import Timeline from "./Timeline";
import Settings from "./Settings";

let ProfileInfo = (props) => {
    return (
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Follow props={props}/>
                        <AboutMe/>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-header p-2">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#activity" data-toggle="tab">Activity</a></li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#timeline" data-toggle="tab">Timeline</a></li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#settings" data-toggle="tab">Settings</a></li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <Activity/>
                                    <Timeline/>
                                    <Settings/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProfileInfo;
