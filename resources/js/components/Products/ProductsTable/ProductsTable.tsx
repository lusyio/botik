// React
import React, {useEffect} from 'react';

// Third-party
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {fetchProducts} from '../../../store/actions/products';

// Typescript
import {IProductsRootState} from '../IProducts';

// App
import Loader from '../../UI/Loader/Loader';
import Placeholder from '../../UI/Placeholder/Placeholder';
import {imgFormatter, timeConverter} from '../../../utils';
import AutoTable from '../../UI/AutoTable/AutoTable';

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

    const expandRowTable = [
        {
            dataField: 'aboutRu',
            text: 'Описание'
        },
        {
            dataField: 'weightNetto',
            text: 'Вес нетто'
        }
    ]

    function moneyFormatter(price, _) {
        return (
            Object.entries(price).map(([_, val]) => {
                return val + ' | '
            })
        )
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
            dataField: 'price',
            text: 'Цена',
            classes: 'price',
            formatter: moneyFormatter,
            sort: true
        },
        {
            dataField: 'updateAt',
            text: 'Обновление',
            sort: true,
            formatter: (updateAt) => timeConverter(updateAt)
        }
    ];

    return (
        <AutoTable
            expandRowTable={expandRowTable}
            keyField='id' data={products} columns={columns}
            button={{link: 'productcreate', text: 'Добавить товар'}}/>
    );
}

export default ProductsTable;
