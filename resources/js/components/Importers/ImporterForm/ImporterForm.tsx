// React
import React from 'react';

// Third-party
import {Field, reduxForm} from 'redux-form'
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// Actions
import {createImporter} from '../../../store/actions/importers';

const ImporterForm: React.FC = (props: any) => {
    const {handleSubmit, pristine, submitting} = props

    const dispatch = useDispatch()
    const history = useHistory()

    const importerFormSubmitHandler = (formValues: any) => {
        dispatch(createImporter(formValues))
        history.push('/importers')
    }
    return (
        <div className='card'>
            <div className="card-body">
                <form onSubmit={handleSubmit((formValues) =>
                    importerFormSubmitHandler(formValues))}>
                    <div className='mb-3 row'>
                        <div className="col-lg-6">
                            <label>
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
                            <label>
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
                                history.goBack()
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
}

export default reduxForm({
    form: 'ImporterFormCreate', // a unique identifier for this form
})(ImporterForm)
