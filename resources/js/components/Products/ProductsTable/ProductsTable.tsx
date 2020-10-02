// React
import React, {useEffect} from 'react';

// Third-party
import {useDispatch, useSelector} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import {NavLink} from 'react-router-dom';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';

// Actions
import {fetchProducts} from '../../../store/actions/products';

// Typescript
import {IProductsRootState} from '../IProducts';

// App
import Loader from '../../UI/Loader/Loader';
import Placeholder from '../../UI/Placeholder/Placeholder';
import {imgFormatter} from '../../../utils';

const ProductsTable: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const {products, loading, error} = useSelector(
        (state: IProductsRootState) => ({
            error: state.productsState.error,
            products: state.productsState.products,
            loading: state.productsState.loading
        })
    );

    if (error) {
        return <div>Error! {error.message}</div>;
    }
    if (loading) {
        return <Loader/>;
    }
    if (!products.length) {
        return <Placeholder
            description='Нажмите на кнопку «Добавить товар»,
             чтобы он отображался в списке'
            link='/products/add' linkName='Добавить товар'
            title='В этом списке ещё нет товаров'/>;
    }

    const columns = [
        {
            dataField: 'image',
            text: '',
            classes: 'product-image',
            formatter: (image, row) =>
                imgFormatter(image, row, '/imgs/placeholder-product-image.png')
        },
        {
            dataField: 'nameRu',
            text: 'Название',
            classes: 'name',
            sort: true
        },
        {
            dataField: 'priceCny',
            text: 'Цена',
            classes: 'price',
            sort: true
        },
        {
            dataField: 'update',
            text: 'Обновление',
            sort: true
        }
    ];

    const {SearchBar} = Search;

    return (
        <ToolkitProvider
            bootstrap4
            keyField='id'
            data={products}
            columns={columns}
            search
        >
            {props => (
                <div>
                    <div className="row">
                        <div className="col-lg-6">
                            <SearchBar {...props.searchProps} />
                        </div>
                        <div className="col-lg-6">
                            <NavLink to={'/productcreate'}>
                                Добавить товар
                            </NavLink>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-body text-muted">
                            <BootstrapTable
                                pagination={paginationFactory({})}
                                bordered={false}
                                {...props.baseProps}
                            />
                        </div>
                    </div>
                </div>
            )}
        </ToolkitProvider>
    );
}

export default ProductsTable;
