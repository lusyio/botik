// React
import React, {useEffect, useState} from 'react'

// Third-party
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'

// Actions
import {createOrder} from '../../../store/actions/orders'
import {fetchProviders} from '../../../store/actions/providers'
import {IProvider, IProvidersRootState} from '../../Providers/IProviders'
import {fetchProducts} from '../../../store/actions/products'
import {IProduct, IProductsRootState} from '../../Products/IProducts'

interface ICreateOrderData {
    name: string
    providerId: string
    items: []
}

const OrderForm: React.FC = () => {
    const {
        register, handleSubmit
    } = useForm<ICreateOrderData>()

    const [items, setItems] = useState([])

    const dispatch = useDispatch()
    const history = useHistory()

    const {providers} = useSelector(
        (state: IProvidersRootState) => ({
            providers: state.providersState.providers
        }))

    const {products} = useSelector(
        (state: IProductsRootState) => ({
            products: state.productsState.products
        }))

    useEffect(() => {
        dispatch(fetchProviders())
        dispatch(fetchProducts())
    }, [dispatch])

    const onChangeHandler = (e) => {
        const id = e.target.value
        // @ts-ignore
        setItems(oldItems => [...oldItems, {id: id, quantity: 1}])
    }

    const orderFormSubmitHandler =
        handleSubmit((formValues: ICreateOrderData) => {
            formValues.items = items
            dispatch(createOrder(formValues))
            history.push('/orders')
        })

    return (
        <form onSubmit={orderFormSubmitHandler}>

            <div className='card mb-3'>
                <div className="card-body">

                    <div className='mb-3 row'>
                        <div className="col-lg-6">
                            <label className='w-100' htmlFor='name'>
                                Название заказа
                            </label>
                            <input className='col-lg-10 mb-2' name="name"
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

                            карго переключатель

                        </div>
                    </div>


                </div>
            </div>

            <div className='card'>
                <div className="card-body">
                    <h2>Список товаров в заказе</h2>

                    {items.length
                        ? items.map(item => {
                            return (<p key={item.id}>{item.id}</p>)
                        })
                        : null
                    }

                    <select name="addProduct" onChange={onChangeHandler}>
                        <option defaultValue='' disabled>
                            Выберите товар
                        </option>
                        {products.map((product: IProduct) => {
                            return (<option
                                key={product.id}
                                value={product.id}>
                                {product.nameRu}</option>)
                        })}
                    </select>
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
    )
}

export default OrderForm
