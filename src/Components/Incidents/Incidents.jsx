import React from 'react';
import {Button, Card, Table} from "react-bootstrap";
import {addIncidentActionCreator, updateNewIncidentTextActionCreator} from "../../redux/incident-reducer";
import * as XLSX from "xlsx";


const Incidents = (props) => {
    let IncidentTableHeaderList = props.incidents.incidentTableHeader.map(el =>
        <tr>
            <th>{el.h1}</th>
            <th>{el.h2}</th>
            <th>{el.h3}</th>
            <th>{el.h4}</th>
            <th>{el.h5}</th>
            <th>{el.h6}</th>
            <th>{el.h7}</th>
            <th>{el.h8}</th>
            <th>{el.h9}</th>
            <th>{el.h10}</th>
        </tr>
    );
    let IncidentElements = props.incidents.incidentData.map(el =>
        <tr>
            <td>{el.d1}</td>
            <td>{el.d2}</td>
            <td>{el.d3}</td>
            <td>{el.d4}</td>
            <td>{el.d5}</td>
            <td>{el.d6}</td>
            <td>{el.d7}</td>
            <td>{el.d8}</td>
            <td>{el.d9}</td>
            <td>{el.d10}</td>
        </tr>
    );
    const handleUpload = (e) => {
        e.preventDefault();

        let files = e.target.files, f = files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            let data = e.target.result;
            let readedData = XLSX.read(data, {type: 'binary'});
            const wsname = readedData.SheetNames[0];
            const ws = readedData.Sheets[wsname];

            /* Convert array to json*/
            const dataParse = XLSX.utils.sheet_to_json(ws, {header: 1});
            console.log(dataParse);
            //setFileUploaded(dataParse);
        };
        reader.readAsBinaryString(f)
    }


    let onAddIncident = () => {
        props.store.dispatch(addIncidentActionCreator())
    }

    let onIncidentChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewIncidentTextActionCreator(text))
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
                                    <Button onClick={onAddIncident}>Добавить заявку</Button><br/>
                                    <input type="text" onChange={onIncidentChange} value={props.newFieldsText}/>

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
