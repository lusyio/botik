// React
import React, {useEffect, useState} from 'react'

// Third-party
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'

// Actions
import {createOrder, fetchProductsByVendor} from '../../../store/actions/orders'
import {fetchProviders} from '../../../store/actions/providers'
import {IProvider, IProvidersRootState} from '../../Providers/IProviders'
import {IProduct} from '../../Products/IProducts'
import OrderItems from '../OrderItems/OrderItems'
import ProductFormEdit from '../../Products/ProductForm/ProductFormEdit'
import {IOrdersRootState} from '../IOrders'

interface ICreateOrderData {
    name: string
    providerId: string
    items: []
    cargo: number
}

const OrderForm: React.FC = () => {
    const {
        register, handleSubmit
    } = useForm<ICreateOrderData>()

    const {
        register: register2, handleSubmit: handleSubmit2
    } = useForm()

    const [items, setItems] = useState([])
    const [data, setData] = useState([])

    const dispatch = useDispatch()
    const history = useHistory()

    const {providers} = useSelector(
        (state: IProvidersRootState) => ({
            providers: state.providersState.providers
        }))

    const {orderProducts} = useSelector(
        (state: IOrdersRootState) => ({
            orderProducts: state.ordersState.orderProducts
        }))

    useEffect(() => {
        dispatch(fetchProviders())
    }, [dispatch])

    const onChangeQtyHandler = (e, itemId: number) => {
        const value = +e.target.value
        // @ts-ignore
        setData(oldData => [...oldData, oldData.find(({id}) =>
            id === itemId).quantity = value])
    }

    const onDeleteHandler = (itemId: number) => {
        const newData = data.filter(el => el.id !== itemId)
        const newItems = items.filter(el => el.id !== itemId)
        setData(newData)
        setItems(newItems)
    }

    // const onChangeHandler = (e) => {
    //     const product = JSON.parse(e.target.value)
    //     // @ts-ignore
    //     setData(oldData => [...oldData, {id: product.id, quantity: 1}])
    //     setItems(oldItems => [...oldItems, product])
    // }

    const orderFormSubmitHandler =
        handleSubmit((formValues: ICreateOrderData) => {
            formValues.items = data.filter(el => typeof el === 'object')
            formValues.cargo = formValues.cargo ? 1 : 0
            dispatch(createOrder(formValues))
            history.push('/orders')
        })

    const getProductSubmitHandler =
        handleSubmit2((formValues) => {
            dispatch(fetchProductsByVendor(formValues))
        })

    return (
        <>
            <form onSubmit={orderFormSubmitHandler}>

                <div className='card mb-3'>
                    <div className="card-body">

                        <div className='mb-3 row'>
                            <div className="col-lg-6">
                                <label className='w-100' htmlFor='name'>
                                    Название заказа
                                </label>
                                <input
                                    className='col-lg-10 mb-3' name="name"
                                    ref={register}
                                    placeholder="Введите название" type="text"/>

                                <label className='w-100' htmlFor='provider'>
                                    Выберите поставщика
                                </label>
                                <select
                                    ref={register}
                                    name="providerId"
                                    className='col-lg-10'
                                >
                                    <option disabled
                                            defaultValue=''>Поставщик
                                    </option>
                                    {providers.map((provider: IProvider) => {
                                        return (<option
                                            key={provider.id}
                                            value={provider.id}>
                                            {provider.name}</option>)
                                    })}
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label className='w-100' htmlFor='provider'>
                                    Статус карго
                                </label>
                                <div className="custom-control custom-switch">
                                    <input
                                        type="checkbox"
                                        name='cargo' ref={register}
                                        className="custom-control-input"
                                        id="customSwitch1"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customSwitch1">
                                    </label>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

                <div className='card mb-3'>
                    <div className="card-body">
                        <h2>Список товаров в заказе</h2>
                        <OrderItems
                            onDelete={onDeleteHandler}
                            onChange={onChangeQtyHandler} items={items}/>
                        <div className="text-right mb-3">
                            Итоговая стоимость
                            <span
                                className="ml-4 font-weight-bold"
                            >124 ¥</span>
                        </div>
                        <div
                            className="d-flex justify-content-between mt-4">
                            <button
                                onClick={() => {
                                    history.goBack()
                                }} className='mr-3 btn btn-light'>
                                Отмена
                            </button>
                            <button className='btn btn-success'
                                    type="submit">
                                Сформировать
                            </button>
                        </div>

                    </div>
                </div>

            </form>
            <form onSubmit={getProductSubmitHandler}>
                <div className='card mb-3'>
                    <div className="card-body">
                        <label htmlFor="articles">
                            Добавить товар по артикулу
                        </label>
                        <textarea
                            ref={register2}
                            name="vendorCodes" rows={4}
                            placeholder='Каждый артикул через пробел'>
                        </textarea>
                        <button
                            className='btn btn-success'
                            type='submit'>
                            Добавить
                        </button>
                    </div>
                </div>
            </form>
            {orderProducts.map((product: IProduct) => {
                return <ProductFormEdit key={product.id} product={product}/>
            })}
        </>
    )
}

export default OrderForm
