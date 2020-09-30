// React
import React, {useEffect} from 'react';

// Third-party
import {useDispatch, useSelector} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import {NavLink} from 'react-router-dom';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';

// Actions
import {fetchImporters} from '../../store/actions/importers';

// Typescript
import {IImportersRootState} from './IImporters';

// App
import Placeholder from '../UI/Placeholder/Placeholder';
import Loader from '../UI/Loader/Loader';

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

    function importerNameFormatter(nameRu, row) {
        return (
            <NavLink to={`/importer/${row.id}`}>{nameRu}</NavLink>
        );
    }

    const columns = [
        {
            dataField: 'nameRu',
            text: 'Название',
            classes: 'title',
            sort: true,
            formatter: importerNameFormatter
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

    const {SearchBar} = Search;

    return (
        <>
            <ToolkitProvider
                bootstrap4
                keyField='id'
                data={importers}
                columns={columns}
                search
            >
                {props => (
                    <div>
                        <div className="row">
                            <div className="col-lg-6">
                                <SearchBar {...props.searchProps} />
                            </div>
                            <div className="col-lg-6">
                                <NavLink to={'/importer/create'}>
                                    Добавить импортера
                                </NavLink>
                            </div>
                        </div>
                        <div className='card'>
                            <div className="card-body text-muted">
                                <BootstrapTable
                                    pagination={paginationFactory({})}
                                    bordered={false}
                                    {...props.baseProps}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </ToolkitProvider>
        </>
    )
}

export default ImportersTable;
