// React
import React, {useEffect} from 'react'

// Third-party
import {NavLink, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

// Typescript
import {IProductsRootState} from '../../components/Products/IProducts'

// Actions
import {fetchProductById} from '../../store/actions/products'

// App
import Loader from '../../components/UI/Loader/Loader'
import {moneyFormatter, timeConverter} from '../../utils'

const Product: React.FC = () => {
    const {id}: any = useParams()

    const dispatch = useDispatch()

    const {product, loading, error} = useSelector(
        (state: IProductsRootState) => ({
            error: state.productsState.error,
            product: state.productsState.product,
            loading: state.productsState.loading
        })
    )

    useEffect(() => {
        dispatch(fetchProductById(id))
    }, [dispatch])

    if (error) {
        return <div>Error! {error.message}</div>
    }
    if (loading) {
        return <Loader/>
    }

    const placeholder = '/imgs/placeholder-product-image.png'
    return (
        <div className='row'>
            <div className='col-lg-8'>
                <div className="card mb-4">
                    <div className="card-body-info">
                        <div className='row'>
                            <div className="col-lg-4">
                                <img
                                    src={'image' in product
                                        ? product.image
                                        : placeholder}
                                    alt={'nameRu' in product
                                        ? product.nameRu
                                        : 'product'}/>
                            </div>
                            <div className='col-lg-8'>
                                <p>{'price' in product
                                    ? moneyFormatter(product.price)
                                    : ''}</p>
                                <p>{'weightBrutto' in product
                                    ? product.weightBrutto
                                    : ''}</p>
                                <p>{'weightNetto' in product
                                    ? product.weightNetto
                                    : ''}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-lg-6">
                                <p>
                                    Название товара
                                    <span className="float-right">
                                    RU
                                </span>
                                </p>
                                <p>{'nameRu' in product
                                    ? product.nameRu
                                    : ''}</p>
                                <p>
                                    Описание
                                </p>
                                <p>{'aboutRu' in product
                                    ? product.aboutRu
                                    : 'Описание отсутствует'}</p>

                                <p className='mt-4'>
                                    {'createdAt' in product
                                        ? timeConverter(product.createdAt)
                                        : ''}
                                    {'updatedAt' in product
                                        ? timeConverter(product.createdAt)
                                        : ''}
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <p>
                                    Product name
                                    <span className="float-right">
                                    ENG
                                </span>
                                </p>
                                <p>{'nameEn' in product
                                    ? product.nameEn
                                    : ''}</p>
                                <p>
                                    About product
                                </p>
                                <p>{'aboutEn' in product
                                    ? product.aboutEn
                                    : 'No description'}</p>
                            </div>
                        </div>
                        <NavLink to={`/productedit/${id}`}
                                 className='editButton'>
                            Редактировать информацию
                        </NavLink>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
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
    )
}

export default Product
