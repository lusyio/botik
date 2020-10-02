// React
import React from 'react';

// App
import Header from '../../components/navigation/Header/Header';

const ProductCreate: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>Product Create page</h1>
        </>
    );
}

export default ProductCreate;
