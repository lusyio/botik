import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ImporterRead extends Component {
    render() {
        return (
            <Row>
                <Col lg="8">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col lg="5">
                                    Название
                                </Col>
                                <Col lg="7">
                                    Импортёр 0001
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <h2>Текущие заказы</h2>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default ImporterRead;