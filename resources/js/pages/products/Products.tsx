// React
import React from 'react';

// App
import Header from '../../components/navigation/Header/Header';
import ProductsTable
    from '../../components/Products/ProductsTable/ProductsTable';

const Products: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <ProductsTable/>
        </>
    )
}

export default Products;
