import React from 'react'
import PersonItem from "./PersonItem";


const PersonsList = (props) => {
    debugger
    let PersonsElements = props.state.personTable.personData.map(el =>
        <PersonItem id={el.id} name={el.name} profession={el.profession} about={el.about}/>
    );

    return (
        <section className="content">
            {/* Default box */}
            <div className="card card-solid">
                <div className="card-body pb-0">
                    <div className="row d-flex align-items-stretch">
                        {PersonsElements}
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
    )
}

export default PersonsList;
