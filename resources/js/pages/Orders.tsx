// React
import React from 'react';

// Typescript
import Header from '../components/navigation/Header/Header';

const Orders: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>orders page</h1>
        </>
    );
}

export default Orders;
