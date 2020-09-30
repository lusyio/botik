// React
import React from 'react';

// Third-party
// import {useParams} from 'react-router-dom';

// App
import Header from '../../components/navigation/Header/Header';

const ImporterEdit: React.FC = ({name}: any) => {
    // const {id}: any = useParams();
    return (
        <>
            <Header name={name}/>
            <h1>Importer edit page</h1>
        </>
    );
}

export default ImporterEdit;
