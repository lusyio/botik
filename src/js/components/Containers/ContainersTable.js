import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../../../css/react-bootstrap-table.css';

const containers = [
    {
        id: "0222014-225",
        status: "В транзите",
        additionalField: "02.08.2020",
        productsCount: "125"
    },
    {
        id: "0222014-226",
        status: "Отменен",
        additionalField: "Возврат оплаты",
        productsCount: "43"
    },
    {
        id: "201585-6841",
        status: "Прибыло на таможню",
        additionalField: "21.08.2020",
        productsCount: "85"
    },
    {
        id: "0222014-225",
        status: "В транзите",
        additionalField: "02.08.2020",
        productsCount: "125"
    },
    {
        id: "0222014-226",
        status: "Отменен",
        additionalField: "Возврат оплаты",
        productsCount: "43"
    },
    {
        id: "201585-6841",
        status: "Прибыло на таможню",
        additionalField: "21.08.2020",
        productsCount: "85"
    },
    {
        id: "0222014-225",
        status: "В транзите",
        additionalField: "02.08.2020",
        productsCount: "125"
    },
    {
        id: "0222014-226",
        status: "Отменен",
        additionalField: "Возврат оплаты",
        productsCount: "43"
    },
    {
        id: "201585-6841",
        status: "Прибыло на таможню",
        additionalField: "21.08.2020",
        productsCount: "85"
    },
    {
        id: "0222014-225",
        status: "В транзите",
        additionalField: "02.08.2020",
        productsCount: "125"
    },
    {
        id: "0222014-226",
        status: "Отменен",
        additionalField: "Возврат оплаты",
        productsCount: "43"
    },
    {
        id: "201585-6841",
        status: "Прибыло на таможню",
        additionalField: "21.08.2020",
        productsCount: "85"
    }
];
const columns = [{
    dataField: 'id',
    text: 'Номер контейнера',
    classes: "containerId",
    sort: true
}, {
    dataField: 'status',
    text: 'Статус',
    classes: "containerStatus",
    sort: true
}, {
    dataField: 'additionalField',
    text: ''
}, {
    dataField: 'productsCount',
    text: 'Кол-во товаров',
    sort: true
}];

class ContainersTable extends Component {
    render() {
        return (
            <div className="text-muted">
                <BootstrapTable bootstrap4 keyField='id' data={containers} columns={columns} bordered={ false }
                                pagination={paginationFactory()}/>
            </div>
        );
    }
}

export default ContainersTable;