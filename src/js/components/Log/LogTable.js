import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../../../css/react-bootstrap-table.css';

const importers = [
    {
        user: "Иванов Иван Иванович",
        action: "Авторизировался в системе в 12:31",
        date: "22.09.2020"
    },
    {
        user: "Иванов Иван Иванович",
        action: "Добавил каталог braslux в 12:46",
        date: "23.09.2020"
    }
];
const columns = [{
    dataField: 'user',
    text: 'Пользователь',
    classes: "logUser",
    sort: true
}, {
    dataField: 'action',
    text: 'Действие',
    classes: "logAction",
    sort: true
}, {
    dataField: 'date',
    text: 'Дата',
    classes: "logDate",
    sort: true
}];

class LogTable extends Component {
    render() {
        return (
            <div className="text-muted">
                <BootstrapTable bootstrap4 keyField='id' data={importers} columns={columns} bordered={ false }
                                pagination={paginationFactory()}/>
            </div>
        );
    }
}

export default LogTable;