// React
import React, {useEffect} from 'react';

// Third-party
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {fetchImporters} from '../../../store/actions/importers';

// Typescript
import {IImportersRootState} from '../IImporters';

// App
import Placeholder from '../../UI/Placeholder/Placeholder';
import Loader from '../../UI/Loader/Loader';
import {nameToLinkFormatter} from '../../../utils';
import AutoTable from '../../UI/AutoTable/AutoTable';

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
        return <Loader/>;
    }
    if (!importers.length) {
        return <Placeholder
            description='Нажмите на кнопку «Добавить импортера»,
             чтобы он отображался в списке'
            link='/importer/add' linkName='Добавить импортера'
            title='В этом списке ещё нет импортеров'/>;
    }

    const columns = [
        {
            dataField: 'nameRu',
            text: 'Название',
            classes: 'title',
            sort: true,
            formatter: (nameRu, row) =>
                nameToLinkFormatter(nameRu, row, 'importer')
        },
        {
            dataField: 'address',
            text: 'Адрес',
            classes: 'email',
            sort: true
        },
        {
            dataField: 'phone',
            text: 'Телефон',
            classes: 'phone',
        }
    ];

    return (
        <AutoTable
            keyField='id' data={importers} columns={columns}
            button={{link: 'importercreate', text: 'Добавить импортера'}}/>
    )
}

export default ImportersTable;