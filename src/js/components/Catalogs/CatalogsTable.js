import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../../../css/react-bootstrap-table.css';

const catalogs = [
    {
        name: "braslux - светотехника",
        provider: "Shiniest Industries",
        update: "02.08.2020",
        tag: "светотехника"
    },
    {
        name: "Philips - светотехника",
        provider: "Philips",
        update: "05.02.2020",
        tag: "светотехника"
    }
];
const columns = [{
    dataField: 'name',
    text: 'Название',
    classes: "catalogName",
    sort: true
}, {
    dataField: 'provider',
    text: 'Поставщик',
    classes: "catalogProvider",
    sort: true
}, {
    dataField: 'update',
    text: 'Обновление',
    classes: "catalogUpdate",
    sort: true
}, {
    dataField: 'tag',
    text: 'Тег',
    classes: "catalogTag"
}];

class CatalogsTable extends Component {
    render() {
        return (
            <div className="text-muted">
                <BootstrapTable bootstrap4 keyField='id' data={catalogs} columns={columns} bordered={ false }
                                pagination={paginationFactory()}/>
            </div>
        );
    }
}

export default CatalogsTable;