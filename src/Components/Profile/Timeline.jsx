import React, {Component} from 'react';

class Timeline extends Component {
    render() {
        return (
            <div className="tab-pane" id="timeline">
                <div className="timeline timeline-inverse">
                    <div className="time-label">
                        <span className="bg-danger">
                          10 Feb. 2014
                        </span>
                    </div>
                    <div>
                        <i className="fas fa-envelope bg-primary"/>

                        <div className="timeline-item">
                            <span className="time"><i className="far fa-clock"/> 12:05</span>

                            <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                            <div className="timeline-body">
                                Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                quora plaxo ideeli hulu weebly balihoo...
                            </div>
                            <div className="timeline-footer">
                                <a href="#" className="btn btn-primary btn-sm">Read more</a>
                                <a href="#" className="btn btn-danger btn-sm">Delete</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <i className="fas fa-user bg-info"/>

                        <div className="timeline-item">
                            <span className="time"><i className="far fa-clock"/> 5 mins ago</span>

                            <h3 className="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend
                                request
                            </h3>
                        </div>
                    </div>
                    <div>
                        <i className="fas fa-comments bg-warning"/>

                        <div className="timeline-item">
                            <span className="time"><i className="far fa-clock"/> 27 mins ago</span>

                            <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                            <div className="timeline-body">
                                Take me to your leader!
                                Switzerland is small and neutral!
                                We are more like Germany, ambitious and misunderstood!
                            </div>
                            <div className="timeline-footer">
                                <a href="#" className="btn btn-warning btn-flat btn-sm">View comment</a>
                            </div>
                        </div>
                    </div>
                    <div className="time-label">
                        <span className="bg-success">
                          3 Jan. 2014
                        </span>
                    </div>
                    <div>
                        <i className="fas fa-camera bg-purple"/>

                        <div className="timeline-item">
                            <span className="time"><i className="far fa-clock"/> 2 days ago</span>

                            <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                            <div className="timeline-body">
                                <img src="https://placehold.it/150x100" alt="..."/>
                                <img src="https://placehold.it/150x100" alt="..."/>
                                <img src="https://placehold.it/150x100" alt="..."/>
                                <img src="https://placehold.it/150x100" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <i className="far fa-clock bg-gray"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timeline;
