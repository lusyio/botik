import React from 'react';
import './App.css';
import Menu from './js/components/Navigation/Menu/Menu';
import Header from './js/components/Navigation/Header/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import OrdersList from './js/components/Orders/OrdersList';
import OrderCreate from "./js/components/Orders/OrderCreate";
import ContainersList from './js/components/Containers/ContainersList';
import ContainerCreate from "./js/components/Containers/СontainerCreate";
import CatalogsList from "./js/components/Catalogs/CatalogsList";
import CatalogCreate from "./js/components/Catalogs/CatalogCreate";
import ProductsList from "./js/components/Products/ProductsList";
import ProductCreate from "./js/components/Products/ProductCreate";
import ProvidersList from "./js/components/Providers/ProvidersList";
import ProviderCreate from "./js/components/Providers/ProviderCreate";
import ImportersList from "./js/components/Importers/ImportersList";
import ImporterCreate from "./js/components/Importers/ImporterCreate";
import ImporterRead from "./js/components/Importers/importerRead";
import Log from "./js/components/Log/Log";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BasicExample() {
    return (
        <Container>
            <Row>
                <Router>
                    <Col lg="2" className="p-0">
                        <Menu/>
                    </Col>
                    <Col lg="10" className="pl-5">
                        <Header/>
                        <Switch>
                            <Route exact path="/">
                                <OrdersList/>
                            </Route>
                            <Route exact path="/orderCreate">
                                <OrderCreate/>
                            </Route>
                            <Route path="/containers">
                                <ContainersList/>
                            </Route>
                            <Route path="/containerCreate">
                                <ContainerCreate/>
                            </Route>
                            <Route path="/catalogs">
                                <CatalogsList/>
                            </Route>
                            <Route path="/catalogCreate">
                                <CatalogCreate/>
                            </Route>
                            <Route path="/products">
                                <ProductsList/>
                            </Route>
                            <Route path="/productCreate">
                                <ProductCreate/>
                            </Route>
                            <Route path="/providers">
                                <ProvidersList/>
                            </Route>
                            <Route path="/providerCreate">
                                <ProviderCreate/>
                            </Route>
                            <Route path="/importers">
                                <ImportersList/>
                            </Route>
                            <Route path="/importerCreate">
                                <ImporterCreate/>
                            </Route>
                            <Route path="/importerRead">
                                <ImporterRead/>
                            </Route>
                            <Route path="/log">
                                <Log/>
                            </Route>
                        </Switch>
                    </Col>
                </Router>
            </Row>
        </Container>
    );
}
