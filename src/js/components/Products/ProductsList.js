import React, {Component} from 'react';
import Search from "../UI/Search/Search";
import {NavLink} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ProductsTable from "./ProductsTable";

class ProductsList extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between mb-3">
                    <Search placeholder="Поиск по названию"/>
                    <NavLink to="/productCreate" className="btn addButton">Добавить товар</NavLink>
                </div>
                <Card>
                    <Card.Body>
                        <ProductsTable/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProductsList;