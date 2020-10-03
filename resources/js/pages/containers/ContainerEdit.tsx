// React
import React from 'react';

// App
import Header from '../../components/navigation/Header/Header';

const ContainerEdit: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>Container Edit page</h1>
        </>
    );
}

export default ContainerEdit;
