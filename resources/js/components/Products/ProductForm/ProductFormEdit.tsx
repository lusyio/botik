// React
import React from 'react'

// Third-party
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'

// Actions
import {fetchProductPrice, updateProduct} from '../../../store/actions/products'
import {IProduct, IProductsRootState} from '../IProducts'

interface IEditProductData {
    nameRu: string
    nameEn: string
    vendorCode: string
    aboutRu: string
    aboutEn: string
    catalogId: number
    image: string
    priceCny: number
    weightNetto: number
    weightBrutto: number
}

const ProductFormEdit: React.FC<{ product: IProduct }> = ({product}) => {
    const {
        register, handleSubmit
    } = useForm<IEditProductData>({
            defaultValues: {
                nameRu: product.nameRu,
                nameEn: product.nameEn,
                vendorCode: product.vendorCode,
                aboutRu: product.aboutRu,
                aboutEn: product.aboutEn,
                priceCny: product.price.cny,
                priceRub: product.price.rub,
                priceUsd: product.price.usd,
                weightNetto: product.weightNetto,
                weightBrutto: product.weightBrutto
            }
        }
    )

    const dispatch = useDispatch()

    const productFormSubmitHandler =
        handleSubmit((formValues: IEditProductData) => {
            formValues.image = formValues.image[0]
            dispatch(updateProduct(product.id, formValues))
        })

    const {price} = useSelector(
        (state: IProductsRootState) => ({
            price: state.productsState.price
        }))

    const onChangePrice = (e) => {
        const value = e.target.value
        dispatch(fetchProductPrice(value))
    }

    return (
        <div className='card mb-3'>
            <div className="card-body">
                <form onSubmit={productFormSubmitHandler}>
                    <div className='mb-3 row'>
                        <div className="col-lg-6">
                            <label htmlFor='vendorCode'
                                   className='w-100'>
                                Укажите артикул
                            </label>
                            <input className='col-lg-10 mb-3'
                                   name="vendorCode"
                                   ref={register}
                                   type="text"
                                   placeholder="Введите номер"/>
                            <label htmlFor='nameRu' className='w-100'>
                                Укажите название товара
                                <span className="float-right
                                    text-main
                                    font-weight-bold
                                    ">
                                    RU
                                </span>
                            </label>
                            <input name="nameRu" className='col-lg-10'
                                   ref={register}
                                   type="text" placeholder="Введите название"/>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor='nameEn' className='w-100'>
                                Product name
                                <span className="float-right
                                    text-main
                                    font-weight-bold
                                    ">
                                    ENG
                                </span>
                            </label>
                            <input name="nameEn" className='col-lg-10'
                                   ref={register}
                                   type="text" placeholder="Type here"/>
                        </div>
                    </div>
                    <div className='mb-3 row'>
                        <div className="col-lg-6">
                            <label htmlFor='aboutRu'>Описание товара</label>
                            <textarea name="aboutRu" id="aboutRu"
                                      className='col-lg-10 mb-3' rows={4}
                                      ref={register}
                                      placeholder="Введите описание">
                            </textarea>
                            <label>Укажите цену</label>
                            <div className='row mb-3'>
                                <div className='col-10'>
                                    <input name="priceCny"
                                           className='w-100'
                                           ref={register}
                                           type="number"
                                           onChange={onChangePrice}
                                           placeholder="0"/>
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
                            <div className="row mb-3">
                                <div className='col-4'>
                                    <input
                                        name="priceUsd"
                                        type="number"
                                        value={price.usd}
                                        className='w-100'
                                        placeholder="0"
                                    />
                                </div>
                                <div className='col-2 pl-0'>
                                    <span
                                        className='priceSymbol text-main
                                         font-weight-bold'>
                                    $
                                    </span>
                                </div>
                                <div className='col-4'>
                                    <input
                                        name="priceRub"
                                        type="number"
                                        ref={register}
                                        value={price.rub}
                                        className='w-100'
                                        placeholder="0"
                                    />
                                </div>
                                <div className='col-2 pl-0'>
                                    <span
                                        className='priceSymbol text-main
                                        font-weight-bold'>
                                        ₽
                                    </span>
                                </div>
                            </div>
                            <label htmlFor='image' className='w-100'>
                                Загрузите изображение товара
                            </label>
                            <img src={product.image} alt=""/>
                            <input
                                name="image" className='col-lg-10 mb-3'
                                ref={register}
                                type="file"
                                placeholder="Путь до изображения"/>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor='aboutEn'>Description</label>
                            <textarea name="aboutEn" id="aboutEn"
                                      className='col-lg-10' rows={4}
                                      ref={register}
                                      placeholder="Type here">
                                </textarea>
                            <div className='row mb-3'>
                                <div className='col-lg-12'>
                                    <label>Укажите вес</label>

                                    <div className='row mb-3'>
                                        <div
                                            className='col-2 small
                                                    pt-2 font-weight-bold'>
                                            Брутто
                                        </div>
                                        <div className='col-8'>
                                            <input name="weightBrutto"
                                                   placeholder="0"
                                                   ref={register}
                                                   type="number"
                                                   className='w-100'/>
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
                                            <input name="weightNetto"
                                                   className='w-100'
                                                   ref={register}
                                                   type="number"
                                                   placeholder="0"/>
                                        </div>
                                        <div className='col-2 priceSymbol
                                            text-main font-weight-bold pl-0'>
                                            кг
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <button className='btn btn-success'
                                            type="submit">
                                        Добавить
                                    </button>
                                    <button>
                                        Удалить товар
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductFormEdit
