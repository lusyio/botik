// React
import React from 'react';

// Third-party
// import {useParams} from 'react-router-dom';

// App
import ImporterForm from '../../components/Importers/ImporterForm/ImporterForm';

const ImporterEdit: React.FC = ({name}: any) => {
    // const {id}: any = useParams();
    return (
        <ImporterForm/>
    );
}

export default ImporterEdit;
