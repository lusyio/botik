import {
    CREATE_CONTAINER_ERROR,
    CREATE_CONTAINER_START,
    CREATE_CONTAINER_SUCCESS,
    FETCH_CONTAINERS_ERROR,
    FETCH_CONTAINERS_START,
    FETCH_CONTAINERS_SUCCESS,
    FETCH_CONTAINER_ERROR,
    FETCH_CONTAINER_START,
    FETCH_CONTAINER_SUCCESS
} from '../../store/actions/actionTypes'

export interface IContainer {
    id: number | null
    name: string
    status: string // Нужно переписать под все возможные статусы
    city: string
    createdAt?: number
    updatedAt?: number
}

export interface IContainersState {
    containers: IContainer[] | []
    container: IContainer | {}
    loading: boolean
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
    payload: IContainer[]
    loading: boolean
}

interface IFetchContainersError {
    type: typeof FETCH_CONTAINERS_ERROR
    payload: any
    loading: boolean
}

interface IFetchContainerStart {
    type: typeof FETCH_CONTAINER_START
    loading: boolean
}

interface IFetchContainerSuccess {
    type: typeof FETCH_CONTAINER_SUCCESS
    payload: IContainer
    loading: boolean
}

interface IFetchContainerError {
    type: typeof FETCH_CONTAINER_ERROR
    payload: any
    loading: boolean
}

interface ICreateContainerStart {
    type: typeof CREATE_CONTAINER_START
    loading: boolean
}

interface ICreateContainerSuccess {
    type: typeof CREATE_CONTAINER_SUCCESS
    payload: IContainer
    loading: boolean
}

interface ICreateContainerError {
    type: typeof CREATE_CONTAINER_ERROR
    payload: any
    loading: boolean
}

export type IContainersActionTypes =
    IFetchContainersStart | IFetchContainersSuccess | IFetchContainersError |
    IFetchContainerStart | IFetchContainerSuccess | IFetchContainerError |
    ICreateContainerStart | ICreateContainerSuccess | ICreateContainerError
