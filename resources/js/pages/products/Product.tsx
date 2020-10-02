// React
import React from 'react';

// Typescript
import Header from '../../components/navigation/Header/Header';

const Product: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>Product page</h1>
        </>
    );
}

export default Product;
