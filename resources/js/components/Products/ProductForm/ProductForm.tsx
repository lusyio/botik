// React
import React from 'react';
import SvgSearch from '../../UI/iconComponents/Search';

// Third-party
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// Actions
import {createProduct} from '../../../store/actions/products';

interface ICreateProductData {
    nameRu: string
    nameEn: string
    vendorCode: string
    aboutRu: string
    aboutEn: string
    catalogId: number
    image: string
    priceRub: number
    priceUsd: number
    priceCny: number
    weightNetto: number
    weightBrutto: number
}

const ProductForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit, pristine, submitting} = props;

    const dispatch = useDispatch();
    const history = useHistory();

    const productFormSubmitHandler = (formValues: ICreateProductData) => {
        dispatch(createProduct(formValues));
        history.push('/products');
    };

    return (
        <div className='card'>
            <div className="card-body">
                <form onSubmit={handleSubmit(
                    (formValues: ICreateProductData) =>
                        productFormSubmitHandler(formValues))}>
                    <div className='mb-3 row'>
                        <div className="col-lg-6">
                            <label className='w-100'>
                                Укажите артикул
                            </label>
                            <div className='row mb-3'>
                                <div className='col-10'>
                                    <Field
                                        name="vendorCode"
                                        component="input"
                                        type="text"
                                        className='w-100'
                                        placeholder="Введите номер"
                                    />
                                </div>
                                <div className='col-2 pl-0'>
                                    <button
                                        className='btn btn-search'>
                                        <SvgSearch/>
                                    </button>
                                </div>
                            </div>


                            <label className='w-100'>
                                Путь до изображения
                            </label>
                            <Field
                                name="image"
                                component="input"
                                type="text"
                                className='col-lg-10'
                                placeholder="Путь до изображения"
                            />
                        </div>
                        <div className="col-lg-6">
                            <label className='w-100'>
                                Выберите каталог
                            </label>
                            <Field
                                name="catalogId"
                                component="select"
                                className='col-lg-10 mb-3'
                            >
                                <option disabled selected value=''>
                                    Выберите каталог
                                </option>
                                <option value='3'>Светильники</option>
                                <option value='4'>Гайки</option>
                            </Field>
                        </div>
                    </div>
                    <div className='mb-3 row'>
                        <div className="col-lg-6">
                            <label className='w-100'>
                                Укажите название товара
                                <span className="float-right
                                    text-main
                                    font-weight-bold
                                    ">
                                    RU
                                </span>
                            </label>
                            <Field
                                name="nameRu"
                                component="input"
                                type="text"
                                className='col-lg-10'
                                placeholder="Введите название"
                            />
                        </div>
                        <div className="col-lg-6">
                            <label className='w-100'>
                                Product name
                                <span className="float-right
                                    text-main
                                    font-weight-bold
                                    ">
                                    ENG
                                </span>
                            </label>
                            <Field
                                name="nameEn"
                                component="input"
                                type="text"
                                className='col-lg-10'
                                placeholder="Type here"
                            />
                        </div>
                    </div>
                    <div className='mb-3 row'>
                        <div className="col-lg-6">
                            <label>Описание товара</label>
                            <Field
                                name="aboutRu"
                                component="textarea"
                                type="text"
                                className='col-lg-10'
                                placeholder="Введите описание"
                            />
                        </div>
                        <div className="col-lg-6">
                            <label>Description</label>
                            <Field
                                name="aboutEn"
                                component="textarea"
                                type="text"
                                className='col-lg-10'
                                placeholder="Type here"
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-lg-6'>
                            <label>Укажите цену</label>
                            <div className='row'>
                                <div className='col-10'>
                                    <Field
                                        name="priceCny"
                                        component="input"
                                        type="number"
                                        className='w-100'
                                        placeholder="0"
                                    />
                                </div>
                                <div className='col-1 pl-0'>
                                <span
                                    className='priceSymbol
                                    text-orange
                                    font-weight-bold'>
                                    ¥
                                </span>
                                </div>
                            </div>

                            <div className='row mt-3'>
                                <div className='col-4 pr-0'>
                                    <Field
                                        name="priceRub"
                                        component="input"
                                        type="number"
                                        className='w-100'
                                        placeholder="0"
                                    />
                                </div>
                                <div className='col-2'>
                                    <span
                                        className='priceSymbol
                                    text-main
                                    font-weight-bold'>
                                    ₽
                                </span>
                                </div>
                                <div className='col-4'>
                                    <Field
                                        name="priceUsd"
                                        component="input"
                                        type="number"
                                        className='w-100'
                                        placeholder="0"
                                    />
                                </div>
                                <div className='col-2 pl-0'>
                                    <span
                                        className='priceSymbol
                                    text-main
                                    font-weight-bold'>
                                    $
                                </span>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6'>
                            <label>Укажите вес</label>

                            <div className='row mb-3'>
                                <div
                                    className='col-2 small
                                    pt-2 font-weight-bold'
                                >
                                    Брутто
                                </div>
                                <div className='col-8'>
                                    <Field
                                        name="weightBrutto"
                                        component="input"
                                        type="number"
                                        className='w-100'
                                        placeholder="0"
                                    />
                                </div>
                                <div className='col-2 priceSymbol
                                    text-main font-weight-bold pl-0'>
                                    кг
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div
                                    className='col-2 small
                                    pt-2 font-weight-bold'
                                >
                                    Нетто
                                </div>
                                <div className='col-8'>
                                    <Field
                                        name="weightNetto"
                                        component="input"
                                        type="number"
                                        className='w-100'
                                        placeholder="0"
                                    />
                                </div>
                                <div className='col-2 priceSymbol
                                    text-main font-weight-bold pl-0'>
                                    кг
                                </div>
                            </div>

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
    form: 'ProductFormCreate'
})(ProductForm);
