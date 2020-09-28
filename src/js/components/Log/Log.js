import React, {Component} from 'react';
import Search from "../UI/Search/Search";
import Card from 'react-bootstrap/Card';
import LogTable from "./LogTable";

class Log extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between mb-3">
                    <Search placeholder="Поиск по названию"/>
                </div>
                <Card>
                    <Card.Body>
                        <LogTable/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Log;