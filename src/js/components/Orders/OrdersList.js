import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../../css/kanban.css';
import {NavLink} from "react-router-dom";

class OrdersList extends Component {
    render() {
        return (
            <Row>
                <Col lg="3">
                    <div className="kanbanCard">
                        <span className="kanbanCardHeader">Создан</span>
                    </div>
                    <div className="kanbanCard">
                        <span className="kanbanCardHeader">
                            <NavLink to="/orderCreate">+ Новый заказ</NavLink>
                        </span>
                    </div>
                    <div className="kanbanCard">
                        <span className="kanbanCardOrderName">demo</span>
                        <hr/>
                        <span className="text-gray">ID</span>
                        <span className="mb-3">23432</span>
                        <span className="text-gray">Дата создания</span>
                        <span>02.03.2020</span>
                    </div>
                    <div className="kanbanCard">
                        <span className="kanbanCardOrderName">Светоотражающая лента</span>
                        <hr/>
                        <span className="text-gray">ID</span>
                        <span className="mb-3">23232</span>
                        <span className="text-gray">Дата создания</span>
                        <span>12.12.2020</span>
                    </div>
                    <div className="kanbanCard">
                        <span className="kanbanCardOrderName">RCJ LED 11-2019</span>
                        <hr/>
                        <span className="text-gray">ID</span>
                        <span className="mb-3">234</span>
                        <span className="text-gray">Дата создания</span>
                        <span>15.03.2020</span>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default OrdersList;