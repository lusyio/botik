// React
import React from 'react';

// App
import Header from '../components/navigation/Header/Header';

const Suppliers: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>Suppliers page</h1>
        </>
    );
}

export default Suppliers;
