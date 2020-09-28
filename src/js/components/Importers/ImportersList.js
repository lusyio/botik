import React, {Component} from 'react';
import Search from "../UI/Search/Search";
import {NavLink} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ImportersTable from "./ImportersTable";

class ImportersList extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between mb-3">
                    <Search placeholder="Поиск по названию"/>
                    <NavLink to="/importerCreate" className="btn addButton">Добавить импортера</NavLink>
                </div>
                <Card>
                    <Card.Body>
                        <ImportersTable/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ImportersList;