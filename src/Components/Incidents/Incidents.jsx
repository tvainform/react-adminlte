import React, {Component} from 'react';
import {Button, Card, Table} from "react-bootstrap";
import IncidentItem from "./IncidentItem";
import IncidentTableHeader from "./IncidentTableHeader";
import {addIncidentActionCreator, updateNewIncidentTextActionCreator} from "../../redux/state";


const Incidents = (props) => {
    let IncidentTableHeaderList = props.state.incidentTable.incidentTableHeader.map(el =>
        <IncidentTableHeader h1={el.h1}
                             h2={el.h2}
                             h3={el.h3}
                             h4={el.h4}
                             h5={el.h5}
                             h6={el.h6}
                             h7={el.h7}
                             h8={el.h8}
                             h9={el.h9}
                             h10={el.h10}/>
    );
    let IncidentElements = props.state.incidentTable.incidentData.map(el =>
        <IncidentItem id={el.id}
                      d1={el.d1}
                      d2={el.d2}
                      d3={el.d3}
                      d4={el.d4}
                      d5={el.d5}
                      d6={el.d6}
                      d7={el.d7}
                      d8={el.d8}
                      d9={el.d9}
                      d10={el.d10}/>
    );

/*
    const wb = XLSX.readFile("file.xlsx", {type: "binary"});
    const ws = wb.Sheets["АСУТП"];
    const data = XLSX.utils.sheet_to_json(ws, {editable: true});
    console.log(data);*/

/*        componentDidMount(){
            const script = document.createElement("script");
            script.src = "js/datatable.js"
            script.async = true;
            document.body.appendChild(script);
        };*/

    /*let newIncidentElement = React.createRef();*/

    let addIncident = () => {
        props.dispatch(addIncidentActionCreator());
    }

    let onIncidentChange = (e) => {
        props.dispatch(updateNewIncidentTextActionCreator(e.target.value));
    }
    return (
        <div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Card>
                                <div className="card-header">
                                    <h3 className="card-title"></h3>
                                    <Button onClick={addIncident}>Добавить заявку</Button><br/>

                                    <input type="text" onChange={onIncidentChange} value={props.state.newFieldsText}/>
                                </div>
                                {/*<!-- /.card-header -->*/}
                                <div className="card-body">
                                    <Table responsive="true" autoWidth="false" id="example1" className="table table-bordered table-striped">
                                        <thead>
                                        {IncidentTableHeaderList}
                                        </thead>
                                        <tbody>
                                        {IncidentElements}
                                        </tbody>
                                        <tfoot>
                                        {IncidentTableHeaderList}
                                        </tfoot>
                                    </Table>
                                </div>
                                {/*<!-- /.card-body -->*/}
                            </Card>
                            {/*<!-- /.card -->*/}
                        </div>
                        {/* <!-- /.col -->*/}
                    </div>
                    {/*<!-- /.row -->*/}
                </div>
                {/*<!-- /.container-fluid -->*/}
            </section>
            {/*<!-- /.content -->*/}
        </div>
    );
}
export default Incidents;
