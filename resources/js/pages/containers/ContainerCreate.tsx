// React
import React from 'react';

// App
import Header from '../../components/navigation/Header/Header';

const ContainerCreate: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>Container Create page</h1>
        </>
    );
}

export default ContainerCreate;
