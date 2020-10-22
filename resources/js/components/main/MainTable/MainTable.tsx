// React
import React from 'react'
import {useEffect} from 'react'

// Third-party
import {useDispatch, useSelector} from 'react-redux'

// Actions
import {fetchOperations} from '../../../store/actions/operations'

// Typescript
import {IOperationsRootState} from '../../Operations/IOperations';

// App
import Placeholder from '../../UI/Placeholder/Placeholder'
import Loader from '../../UI/Loader/Loader'
import AutoTable from '../../UI/AutoTable/AutoTable'
import {timeConverter, bankIDToCardFormatter} from '../../../utils'
import {ColumnDescription} from 'react-bootstrap-table-next'
import Error from '../../UI/Error/Error'

const MainTable: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOperations())
    }, [dispatch])

    const {operations, loading, error} = useSelector(
        (state: IOperationsRootState) => ({
            error: state.operationsState.error,
            operations: state.operationsState.operations,
            loading: state.operationsState.loading
        })
    )

    if (error) {
        return <Error/>
    }
    if (loading) {
        return <Loader/>
    }
    if (!operations.length) {
        return <Placeholder
            description='Нажмите на кнопку «Создать заказ»,
             чтобы он отображался в списке'
            link='/main' linkName='Создать заказ'
            title='В этом списке ещё нет заказов'/>
    }
    const color = 1;

    const columns: ColumnDescription[] = [
        {
            dataField: 'bank_id',
            text: 'bank',
            classes: 'bank',
            // eslint-disable-next-line camelcase
            formatter: (bank_id, row) =>
                bankIDToCardFormatter(bank_id, color)
        },
        {
            dataField: 'name',
            text: 'имя',
            classes: 'name'
        },
        {
            dataField: 'value',
            text: 'сумма',
            classes: 'value'
        },
        {
            dataField: 'type',
            text: 'тип',
            classes: 'type'
        },
        {
            dataField: 'createdAt',
            text: 'дата',
            formatter: timeConverter
        }
    ]

    return (
        <AutoTable
            keyField='id' data={operations} columns={columns}/>
    )
}

export default MainTable
