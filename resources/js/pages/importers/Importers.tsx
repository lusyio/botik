// React
import React from 'react';

// App
import ImportersTable
    from '../../components/Importers/ImportersTable/ImportersTable';
import Header from '../../components/navigation/Header/Header';

const Importers: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <ImportersTable/>
        </>
    );
}

export default Importers;
