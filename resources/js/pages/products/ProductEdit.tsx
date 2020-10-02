// React
import React from 'react';

// App
import Header from '../../components/navigation/Header/Header';

const ProductEdit: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>Product Edit page</h1>
        </>
    );
}

export default ProductEdit;
