// React
import React from 'react';

// Third-party
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// Actions
import {createImporter} from '../../../store/actions/importers';

interface ICreateImporterData {
    nameRu: string
    nameEn: string
    address: string
    phone: string
}

const ImporterForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit, pristine, submitting} = props;

    const dispatch = useDispatch();
    const history = useHistory();

    const importerFormSubmitHandler = (formValues: ICreateImporterData) => {
        dispatch(createImporter(formValues));
        history.push('/importers');
    };

    return (
        <div className='card'>
            <div className="card-body">
                <form onSubmit={handleSubmit(
                    (formValues: ICreateImporterData) =>
                        importerFormSubmitHandler(formValues))}>
                    <div className='mb-3 row'>
                        <div className="col-lg-6">
                            <label className='w-100'>
                                Укажите название
                                <span className="font-weight-bold float-right">
                                    RU
                                </span>
                            </label>
                            <Field
                                name="nameRu"
                                component="input"
                                type="text"
                                className='col-lg-10 form-control'
                                placeholder="Введите название"
                            />
                        </div>
                        <div className="col-lg-6">
                            <label className='w-100'>
                                Name
                                <span className="font-weight-bold float-right">
                                    ENG
                                </span>
                            </label>
                            <Field
                                name="nameEn"
                                component="input"
                                type="text"
                                className='col-lg-10 form-control'
                                placeholder="Type here"
                            />
                        </div>
                    </div>
                    <div className='mb-5 row'>
                        <div className="col-lg-6">
                            <label>Укажите адрес</label>
                            <Field
                                name="address"
                                component="input"
                                type="text"
                                className='col-lg-10 form-control'
                                placeholder="Введите адрес"
                            />
                        </div>
                        <div className="col-lg-6">
                            <label>Укажите номер телефона</label>
                            <Field
                                name="phone"
                                component="input"
                                type="phone"
                                className='col-lg-10 form-control'
                                placeholder="Введите номер"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                history.goBack();
                            }} className='mr-3 btn btn-light'>
                            Назад
                        </button>
                        <button className='btn btn-success'
                                type="submit"
                                disabled={pristine || submitting}>
                            Сохранить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default reduxForm({
    form: 'ImporterFormCreate'
})(ImporterForm);
