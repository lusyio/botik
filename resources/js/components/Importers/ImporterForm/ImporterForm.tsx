// React
import React from 'react'

// Third-party
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'

// Actions
import {createImporter} from '../../../store/actions/importers'

interface ICreateImporterData {
    nameRu: string
    nameEn: string
    address: string
    phone: string
}

const ImporterForm: React.FC = () => {
    const {
        register, handleSubmit
    } = useForm<ICreateImporterData>()

    const dispatch = useDispatch()
    const history = useHistory()

    const importerFormSubmitHandler =
        handleSubmit((formValues: ICreateImporterData) => {
            dispatch(createImporter(formValues))
            history.push('/importers')
        })

    return (
        <div className='card'>
            <div className="card-body">
                <form onSubmit={importerFormSubmitHandler}>
                    <div className='mb-3 row'>
                        <div className="col-lg-6">
                            <label htmlFor='nameRu' className='w-100'>
                                Укажите название
                                <span className="float-right
                                    text-main
                                    font-weight-bold
                                    ">
                                    RU
                                </span>
                            </label>
                            <input className='col-lg-10' name="nameRu"
                                   ref={register}
                                   type="text" placeholder="Введите название"/>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor='nameEn' className='w-100'>
                                Name
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
                    <div className='mb-5 row'>
                        <div className="col-lg-6">
                            <label htmlFor='address'>Укажите адрес</label>
                            <input
                                name="address" type="text"
                                className='col-lg-10'
                                ref={register}
                                placeholder="Введите адрес"/>
                        </div>
                        <div className="col-lg-6">
                            <label
                                htmlFor='phone'>Укажите номер телефона</label>
                            <input
                                name="phone" type="tel"
                                className='col-lg-10'
                                ref={register}
                                placeholder="Введите номер"/>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                history.goBack()
                            }} className='mr-3 btn btn-light'>
                            Назад
                        </button>
                        <button
                            className='btn btn-success'
                            type="submit">
                            Сохранить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ImporterForm
