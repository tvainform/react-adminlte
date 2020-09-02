import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem} from "react-bootstrap";

class ContentHeader extends Component {
    render() {
        return (
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Персонал</h1>
                        </div>
                        <div className="col-sm-6">
                            <Breadcrumb className="breadcrumb float-sm-right">
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href={Breadcrumb.displayName} active>Contacts</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
                {/* /.container-fluid */}
            </section>
        );
    }
}

export default ContentHeader;
