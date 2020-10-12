// React
import React from 'react';

// Third-party
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// Actions
import {createCatalog} from '../../../store/actions/catalogs';

interface ICreateCatalogData {
    name: string
    providerId: string
    file: string
}

const CatalogForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit, pristine, submitting} = props;

    const dispatch = useDispatch();
    const history = useHistory();

    const catalogFormSubmitHandler = (formValues: ICreateCatalogData) => {
        dispatch(createCatalog(formValues));
        history.push('/catalogs');
    };

    return (
        <div className='card'>
            <div className="card-body">
                <form onSubmit={handleSubmit(
                    (formValues: ICreateCatalogData) =>
                        catalogFormSubmitHandler(formValues))}>
                    <div className='mb-3 row'>
                        <div className="col-lg-6">
                            <label className='w-100'>
                                Укажите название для каталога
                            </label>
                            <Field
                                name="name"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-3'
                                placeholder="Введите название"
                            />

                            <label className='w-100'>
                                Выберите поставщика
                            </label>
                            <Field
                                name="providerId"
                                component="select"
                                className='col-lg-10'
                            >
                                <option disabled selected value=''>
                                    Выберите поставщика
                                </option>
                                <option value='1'>поставщик 1</option>
                                <option value='2'>поставщик 2</option>
                            </Field>
                        </div>
                        <div className="col-lg-6">
                            <label className='w-100'>
                                Укажите теги
                            </label>
                            <Field
                                name="tags"
                                component="input"
                                type="text"
                                className='col-lg-10'
                                placeholder="Type here"
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
    form: 'CatalogFormCreate'
})(CatalogForm);
