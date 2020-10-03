import {
    FETCH_CONTAINER_START,
    FETCH_CONTAINERS_ERROR,
    FETCH_CONTAINERS_START,
    FETCH_CONTAINERS_SUCCESS,
    FETCH_CONTAINER_SUCCESS,
    FETCH_CONTAINER_ERROR
} from '../../store/actions/actionTypes';

export interface IContainer {
    id: number | null
    name: string
    nameCompany: string
    email?: string
    website?: string
    phone?: string
    wechat?: string
    countryId?: any // код страны(Чуть позже здесь будет объект Страна)
    beneficiaryName: string
    beneficiaryAccountName: string
    beneficiaryBankAddress: string
    beneficiaryAddress: string
    beneficiaryBankName: string
    beneficiaryBankCode: string
    catalogs: [] // Здесь будет массив объектов Каталоги
    orders: [] // Здесь будет массив объектов Заказы
    createdAt?: number;
    updatedAt?: number;
}


export interface IContainersState {
    containers: IContainer[] | []
    container: IContainer | {}
    loading: boolean;
    error: any
}

export interface IContainersRootState {
    containersState: IContainersState
}

interface IFetchContainersStart {
    type: typeof FETCH_CONTAINERS_START
    loading: boolean
}

interface IFetchContainersSuccess {
    type: typeof FETCH_CONTAINERS_SUCCESS
    loading: boolean
    payload: IContainer[]
}

interface IFetchContainersError {
    type: typeof FETCH_CONTAINERS_ERROR
    loading: boolean
    payload: any
}

interface IFetchContainerStart {
    type: typeof FETCH_CONTAINER_START
    loading: boolean
}

interface IFetchContainerSuccess {
    type: typeof FETCH_CONTAINER_SUCCESS
    loading: boolean
    payload: IContainer
}

interface IFetchContainerError {
    type: typeof FETCH_CONTAINER_ERROR
    loading: boolean
    payload: any
}

export type IContainersActionTypes =
    IFetchContainersStart | IFetchContainersSuccess | IFetchContainersError |
    IFetchContainerStart | IFetchContainerSuccess | IFetchContainerError
