import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../../../css/react-bootstrap-table.css';
import {NavLink} from "react-router-dom";

const importers = [
    {
        name: "Импортёр номер 001",
        adress: "P.R. China 113006 Shuiandngchen 3",
        phone: "+343506575780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Shuiandngchen, Shuncheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    },
    {
        name: "Импортёр номер 002",
        adress: "Runcheng QU Fushen, P.R. China 113006",
        phone: "+323124565780"
    }
];

function importerNameFormatter(name, row) {
    if (row.name) {
        return (
            <NavLink to="/importerRead">{ name }</NavLink>
        );
    }
}

const columns = [{
    dataField: 'name',
    text: 'Название',
    classes: "importerName",
    sort: true,
    formatter: importerNameFormatter
}, {
    dataField: 'adress',
    text: 'Адрес',
    classes: "importerEmail",
    sort: true
}, {
    dataField: 'phone',
    text: 'Телефон',
    classes: "importerWechat",
    sort: true
}];


class ImportersTable extends Component {
    render() {
        return (
            <div className="text-muted">
                <BootstrapTable bootstrap4 keyField='id' data={importers} columns={columns} bordered={ false }
                                pagination={paginationFactory()}/>
            </div>
        );
    }
}

export default ImportersTable;