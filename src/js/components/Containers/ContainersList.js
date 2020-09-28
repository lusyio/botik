import React, {Component} from 'react';
import Search from "../UI/Search/Search";
import {NavLink} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ContainersTable from "./ContainersTable";

class ContainersList extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between mb-3">
                    <Search placeholder="Поиск по № контейнера"/>
                    <NavLink to="/containerCreate" className="btn addButton">Добавить контейнер</NavLink>
                </div>
                <Card>
                    <Card.Body>
                        <ContainersTable/>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}

export default ContainersList;