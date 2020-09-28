import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../../../css/react-bootstrap-table.css';

const products = [
    {
        img: "https://autolong.ru/images/products/thumb/22763_1.png",
        name: "Гайковерт без головок (ручной)",
        price: "60",
        update: "02.08.2020"
    },
    {
        img: "https://autolong.ru/images/products/thumb/22754_1.png",
        name: "Колпачок на гайку 33 мм h=51 мм (Нержавейка)",
        price: "34",
        update: "11.09.2020"
    }
];

function imgFormatter(img, row) {
    if (row.img) {
        return (
            <img src={ img } />
        );
    }
}

const columns = [{
    dataField: 'img',
    text: '',
    classes: "productsImg",
    formatter: imgFormatter
}, {
    dataField: 'name',
    text: 'Название',
    classes: "productsName",
    sort: true
}, {
    dataField: 'price',
    text: 'Цена',
    classes: "productsPrice",
    sort: true
}, {
    dataField: 'update',
    text: 'Обновление',
    classes: "productsUpdate",
    sort: true
}];

class ProductsTable extends Component {
    render() {
        return (
            <div className="text-muted">
                <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} bordered={ false }
                                pagination={paginationFactory()}/>
            </div>
        );
    }
}

export default ProductsTable;