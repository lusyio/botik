import {
    CREATE_OPERATION_ERROR,
    CREATE_OPERATION_START,
    CREATE_OPERATION_SUCCESS,
    FETCH_OPERATIONS_ERROR,
    FETCH_OPERATIONS_START,
    FETCH_OPERATIONS_SUCCESS,
    FETCH_OPERATION_ERROR,
    FETCH_OPERATION_START,
    FETCH_OPERATION_SUCCESS, FETCH_OPERATION_PRODUCTS
} from '../../store/actions/actionTypes'

export interface IOperation {
    id: number
    name: string
    value: string
    type: string
    // eslint-disable-next-line camelcase
    bank_id: string
    createdAt?: number
    updatedAt?: number
}

export interface IOperationsState {
    operations: IOperation[] | []
    operation: IOperation | {}
    loading: boolean;
    error: any
}

export interface IOperationsRootState {
    operationsState: IOperationsState
}

interface IFetchOperationsStart {
    type: typeof FETCH_OPERATIONS_START
    loading: boolean
}

interface IFetchOperationsSuccess {
    type: typeof FETCH_OPERATIONS_SUCCESS
    payload: IOperation[]
    loading: boolean
}

interface IFetchOperationsError {
    type: typeof FETCH_OPERATIONS_ERROR
    payload: any
    loading: boolean
}

interface IFetchOperationStart {
    type: typeof FETCH_OPERATION_START
    loading: boolean
}

interface IFetchOperationSuccess {
    type: typeof FETCH_OPERATION_SUCCESS
    payload: IOperation;
    loading: boolean
}

interface IFetchOperationError {
    type: typeof FETCH_OPERATION_ERROR
    payload: any
    loading: boolean
}

interface ICreateOperationStart {
    type: typeof CREATE_OPERATION_START
    loading: boolean
}

interface ICreateOperationSuccess {
    type: typeof CREATE_OPERATION_SUCCESS
    payload: IOperation;
    loading: boolean
}

interface ICreateOperationError {
    type: typeof CREATE_OPERATION_ERROR
    payload: any
    loading: boolean
}

interface IFetchOperationProducts {
    type: typeof FETCH_OPERATION_PRODUCTS
    payload: any
    loading: boolean
}

export type IOperationsActionTypes =
    IFetchOperationsStart | IFetchOperationsSuccess | IFetchOperationsError |
    IFetchOperationStart | IFetchOperationSuccess | IFetchOperationError |
    ICreateOperationStart | ICreateOperationSuccess | ICreateOperationError |
    IFetchOperationProducts
