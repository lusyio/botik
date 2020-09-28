import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class OrderCreate extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col lg="6">
                                <Form.Label className="w-100">Название заказа</Form.Label>
                                <Form.Control className="mb-2" placeholder="Введите название"/>
                                <Form.Label className="w-100">Выберите поставщика</Form.Label>
                                <Form.Control as="select">
                                    <option disabled selected>Поставщик</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Col>
                            <Col lg="6">
                                Карго?
                            </Col>
                        </Row>

                        <Button variant="success" type="submit">
                            Сформировать
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default OrderCreate;