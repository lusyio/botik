// React
import React, {useEffect} from 'react';

// Third-party
import {NavLink, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {fetchImporterById} from '../../store/actions/importers';

// Typescript
import {
    IImporter,
    IImportersRootState
} from '../../components/Importers/IImporters';

// App
import Loader from '../../components/UI/Loader/Loader';
import Header from '../../components/navigation/Header/Header';

const Importer: React.FC<IImporter> = ({name}: any) => {
    const {id}: any = useParams();

    const dispatch = useDispatch();

    const {importer, loading, error} = useSelector(
        (state: IImportersRootState) => ({
            error: state.importersState.error,
            importer: state.importersState.importer,
            loading: state.importersState.loading
        })
    );

    useEffect(() => {
        dispatch(fetchImporterById(id));
    }, [dispatch]);

    if (error) {
        return <div>Error! {error.message}</div>;
    }
    if (loading) {
        return <Loader/>;
    }
    return (
        <>
            <Header name={name}/>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-5">
                                    <p>Название:</p>
                                    <p>Name:</p>
                                    <p>Телефон:</p>
                                    <p>Адрес:</p>
                                </div>
                                <div className="col-lg-7">
                                    <p>{'nameRu' in importer
                                        ? importer.nameRu
                                        : ''}</p>
                                    <p>{'nameEn' in importer
                                        ? importer.nameEn
                                        : ''}</p>
                                    <p>{'phone' in importer
                                        ? importer.phone
                                        : ''}</p>
                                    <p>{'address' in importer
                                        ? importer.address
                                        : ''}</p>
                                </div>
                            </div>
                            <NavLink to={`/importeredit/${id}`}>
                                Редактировать информацию
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className="card">
                        <div className="card-body">
                            Текущие заказы
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Importer;
