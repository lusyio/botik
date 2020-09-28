import React, {Component} from 'react';
import Search from "../UI/Search/Search";
import {NavLink} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CatalogsTable from "./CatalogsTable";

class CatalogsList extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between mb-3">
                    <Search placeholder="Поиск по названию и тегам"/>
                    <NavLink to="/catalogCreate" className="btn addButton">Добавить каталог</NavLink>
                </div>
                <Card>
                    <Card.Body>
                        <CatalogsTable/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CatalogsList;