// React
import React, {useEffect} from 'react';

// Third-party
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {fetchImporters} from '../../store/actions/importers';

// Typescript
import {IImportersRootState} from './IImporters';

const ImportersTable: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchImporters());
    }, [dispatch]);

    const {importers, loading, error} = useSelector(
        (state: IImportersRootState) => ({
            error: state.importersState.error,
            importers: state.importersState.importers,
            loading: state.importersState.loading
        })
    );

    if (error) {
        return <div>Error! {error.message}</div>;
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!importers.length) {
        return <div>Importers empty...</div>;
    }

    console.log(importers)

    return (
        <h1>
            Importers page
        </h1>
    )
}

export default ImportersTable;
