import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../../../css/react-bootstrap-table.css';

const providers = [
    {
        name: "Поставщик номер 001",
        email: "name@example.com",
        wechat: "13506575780",
        catalogs: "4"
    },
    {
        name: "Поставщик номер 002",
        email: "test@example.com",
        wechat: "13526575780",
        catalogs: "12"
    }
];
const columns = [{
    dataField: 'name',
    text: 'Название',
    classes: "providerName",
    sort: true
}, {
    dataField: 'email',
    text: 'Почта',
    classes: "providerEmail",
    sort: true
}, {
    dataField: 'wechat',
    text: 'Wechat',
    classes: "providerWechat"
}, {
    dataField: 'catalogs',
    text: 'Каталоги',
    classes: "providerCatalogs",
    sort: true
}];

class ProvidersTable extends Component {
    render() {
        return (
            <div className="text-muted">
                <BootstrapTable bootstrap4 keyField='id' data={providers} columns={columns} bordered={ false }
                                pagination={paginationFactory()}/>
            </div>
        );
    }
}

export default ProvidersTable;