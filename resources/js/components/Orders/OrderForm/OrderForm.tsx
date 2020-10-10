// React
import React from 'react';

// Third-party
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
// import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// Actions
// import {createOrder} from '../../../store/actions/orders';

interface ICreateOrderData {
    name: string
    provider: string
}

const OrderForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit, pristine, submitting} = props;

    // const dispatch = useDispatch();
    const history = useHistory();

    const orderFormSubmitHandler = (formValues: ICreateOrderData) => {
        // dispatch(createOrder(formValues));
        history.push('/orders');
    };

    return (
        <form onSubmit={handleSubmit(
            (formValues: ICreateOrderData) =>
                orderFormSubmitHandler(formValues))}>

        <div className='card mb-3'>
            <div className="card-body">

                    <div className='mb-3 row'>
                        <div className="col-lg-6">
                            <label className='w-100'>
                                Название заказа
                            </label>
                            <Field
                                name="name"
                                component="input"
                                type="text"
                                className='col-lg-10 mb-2'
                                placeholder="Введите название"
                            />
                            <label className='w-100'>
                                Выберите поставщика
                            </label>
                            <Field
                                name="provider"
                                component="select"
                                className='col-lg-10'
                            >
                                <option disabled selected>Поставщик</option>
                                <option value="1">Yiche Electronic</option>
                            </Field>
                        </div>
                        <div className="col-lg-6">

                            карго переключатель

                        </div>
                    </div>


            </div>
        </div>

            <div className='card'>
                <div className="card-body">

                    <h2>Список товаров в заказе</h2>

                    <button
                        className="btn addButton w-100 border-primary mb-3"
                    >
                        Добавить товар
                    </button>
                    <div className="text-right mb-3">
                        Итоговая стоимость
                        <span
                            className="ml-4 font-weight-bold"
                        >124 ¥</span>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                history.goBack();
                            }} className='mr-3 btn btn-light'>
                            Отмена
                        </button>
                        <button className='btn btn-success'
                                type="submit"
                                disabled={pristine || submitting}>
                            Сформировать
                        </button>
                    </div>

                </div>
            </div>

        </form>
    );
};

export default reduxForm({
    form: 'OrderFormCreate'
})(OrderForm);
