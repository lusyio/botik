// React
import React from 'react';

// App
import Header from '../../components/navigation/Header/Header';

const Containers: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>Containers page</h1>
        </>
    );
}

export default Containers;
