// React
import React from 'react';

// Typescript
import Header from '../components/navigation/Header/Header';

const Products: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>Products page</h1>
        </>
    );
}

export default Products;
