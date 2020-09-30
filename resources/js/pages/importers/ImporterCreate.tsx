// React
import React from 'react';

// App
import Header from '../../components/navigation/Header/Header';

const ImporterCreate: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>Importer Create</h1>
        </>
    );
}

export default ImporterCreate;
