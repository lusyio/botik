import React, {Component} from 'react';
import Search from "../UI/Search/Search";
import {NavLink} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ProvidersTable from "./ProvidersTable";

class ProvidersList extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between mb-3">
                    <Search placeholder="Поиск по названию"/>
                    <NavLink to="/providerCreate" className="btn addButton">Добавить поставщика</NavLink>
                </div>
                <Card>
                    <Card.Body>
                        <ProvidersTable/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProvidersList;