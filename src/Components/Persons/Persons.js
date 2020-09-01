import React, { Component } from 'react'
import Person from "./Person/Person";

export default class Persons extends Component {
    render() {
        return (
 <div>
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Персонал</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Contacts</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    {/* Default box */}
    <div className="card card-solid">
      <div className="card-body pb-0">
        <div className="row d-flex align-items-stretch">
          <Person/>
          <Person/>
          <Person/>
          <Person/>
        </div>
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <nav aria-label="Contacts Page Navigation">
          <ul className="pagination justify-content-center m-0">
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#">6</a></li>
            <li className="page-item"><a className="page-link" href="#">7</a></li>
            <li className="page-item"><a className="page-link" href="#">8</a></li>
          </ul>
        </nav>
      </div>
      {/* /.card-footer */}
    </div>
    {/* /.card */}
  </section>
  {/* /.content */}
</div>

        )
    }
}
