// React
import React from 'react';

// Third-party
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import SvgCatalog from '../../UI/iconComponents/Catalog';
import SvgClose from '../../UI/iconComponents/Close';

// Actions
import {createProvider} from '../../../store/actions/providers';

interface ICreateProviderData {
    name: string
    nameCompany: string
    email: string
    website: string
    phone: string
    wechat: string
    countryId: string
    beneficiaryName: string
    beneficiaryAccountName: string
    beneficiaryBankAddress: string
    beneficiaryAddress: string
    beneficiaryBankName: string
    beneficiaryBankCode: string
}

const ProviderForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit, pristine, submitting} = props;

    const dispatch = useDispatch();
    const history = useHistory();

    const providerFormSubmitHandler = (formValues: ICreateProviderData) => {
        dispatch(createProvider(formValues));
        history.push('/providers');
    };

    return (
        <div className='card'>
            <div className="card-body">
                <form onSubmit={handleSubmit(
                    (formValues: ICreateProviderData) =>
                        providerFormSubmitHandler(formValues))}>
                    <div className='mb-3 row'>
                        <div className="col-lg-6">
                            <label className='w-100'>
                                Укажите поставщика
                            </label>
                            <Field
                                name="name"
                                component="input"
                                type="text"
                                className='col-lg-10'
                                placeholder="Введите название для системы"
                            />
                        </div>
                        <div className="col-lg-6">
                            <label className='w-100'>
                                Укажите название компании
                            </label>
                            <Field
                                name="nameCompany"
                                component="input"
                                type="text"
                                className='col-lg-10'
                                placeholder="Введите название"
                            />
                        </div>

                        <div className="col-lg-12 mt-4 mb-1">
                            <h2>Общая информация</h2>
                        </div>

                        <div className="col-lg-6">
                            <label className='w-100'>
                                Укажите почту
                            </label>
                            <Field
                                name="email"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-2'
                                placeholder="Введите почту"
                            />

                            <label className='w-100'>
                                Укажите телефон
                            </label>
                            <Field
                                name="phone"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-2'
                                placeholder="Введите номер телефона"
                            />

                            <label className='w-100'>
                                Выберите страну
                            </label>
                            <Field
                                name="countryId"
                                component="select"
                                className='col-lg-10 mb-2'
                            >
                                <option disabled selected>Страна</option>
                                <option value="1">Китай</option>
                                <option value="2">Россия</option>
                            </Field>
                        </div>

                        <div className="col-lg-6">
                            <label className='w-100'>
                                Укажите адрес сайта
                            </label>
                            <Field
                                name="website"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-2'
                                placeholder="Введите адрес сайта"
                            />

                            <label className='w-100'>
                                Укажите Wechat
                            </label>
                            <Field
                                name="wechat"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-2'
                                placeholder="Wechat"
                            />
                        </div>

                        <div className="col-lg-12 mt-4 mb-1">
                            <h2>Реквизиты</h2>
                        </div>

                        <div className="col-lg-6">
                            <label className='w-100'>
                                Beneficiary Name
                            </label>
                            <Field
                                name="beneficiaryName"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-2'
                                placeholder="Beneficiary name"
                            />

                            <label className='w-100'>
                                Beneficiary Account Name
                            </label>
                            <Field
                                name="beneficiaryAccountName"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-2'
                                placeholder="Beneficiary Account Name"
                            />

                            <label className='w-100'>
                                Beneficiary Bank Address
                            </label>
                            <Field
                                name="beneficiaryBankAddress"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-2'
                                placeholder="Beneficiary Bank Address"
                            />

                            <label className='w-100'>
                                SWIFT Address
                            </label>
                            <Field
                                name="beneficiarySwiftAddress"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-2'
                                placeholder="SWIFT Address"
                            />
                        </div>

                        <div className="col-lg-6">
                            <label className='w-100'>
                                Address
                            </label>
                            <Field
                                name="beneficiaryAddress"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-2'
                                placeholder="Address"
                            />

                            <label className='w-100'>
                                Beneficiary Bank Name
                            </label>
                            <Field
                                name="beneficiaryBankName"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-2'
                                placeholder="Beneficiary Bank Name"
                            />

                            <label className='w-100'>
                                Beneficiary Bank Code
                            </label>
                            <Field
                                name="beneficiaryBankCode"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-2'
                                placeholder="Beneficiary Bank Code"
                            />
                        </div>

                        <div className="col-lg-12 mt-4 mb-1">
                            <h2>Каталоги</h2>


                            <div className="card border mb-3">
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-lg-1">
                                            <SvgCatalog/>
                                        </div>
                                        <div className="col-lg-10 pt-1">
                                            braslux - светотехника
                                        </div>
                                        <div className="col-lg-1 pt-1">
                                            <SvgClose/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <label className='w-100'>
                                Выберите поставщика
                            </label>
                            <Field
                                name="nameEn"
                                component="select"
                                className='col-lg-10 mb-3'
                            >
                                <option disabled selected>Каталог</option>
                                <option>Светильники</option>
                                <option>Гайки</option>
                            </Field>
                            <span className='mb-4 d-block small'>
                                    + Привязать ещё один каталог
                                </span>
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
    form: 'ProviderFormCreate'
})(ProviderForm);
