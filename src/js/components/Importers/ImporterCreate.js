import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ImporterCreate extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col lg="6">
                                <Form.Label className="w-100">Укажите название<span
                                    className="font-weight-bold float-right text-primary">RU</span></Form.Label>
                                <Form.Control className="col-lg-10" placeholder="Введите название"/>
                            </Col>
                            <Col lg="6">
                                <Form.Label className="w-100">Name<span
                                    className="font-weight-bold float-right text-primary">ENG</span></Form.Label>
                                <Form.Control className="col-lg-10" placeholder="Type here"/>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col lg="6">
                                <Form.Label>Укажите адрес</Form.Label>
                                <Form.Control className="col-lg-10" placeholder="Введите адрес"/>
                            </Col>
                            <Col lg="6">
                                <Form.Label>Укажите номер телефона</Form.Label>
                                <Form.Control className="col-lg-10" placeholder="Введите телефон"/>
                            </Col>
                        </Row>
                        <Button variant="light" className="mr-3" type="text">
                            Назад
                        </Button>
                        <Button variant="success" type="submit">
                            Сохранить
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default ImporterCreate;