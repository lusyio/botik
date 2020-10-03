import {
    FETCH_PROVIDER_START,
    FETCH_PROVIDERS_ERROR,
    FETCH_PROVIDERS_START,
    FETCH_PROVIDERS_SUCCESS,
    FETCH_PROVIDER_SUCCESS,
    FETCH_PROVIDER_ERROR
} from '../../store/actions/actionTypes';

export interface IProvider {
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


export interface IProvidersState {
    providers: IProvider[] | []
    provider: IProvider | {}
    loading: boolean;
    error: any
}

export interface IProvidersRootState {
    providersState: IProvidersState
}

interface IFetchProvidersStart {
    type: typeof FETCH_PROVIDERS_START
    loading: boolean
}

interface IFetchProvidersSuccess {
    type: typeof FETCH_PROVIDERS_SUCCESS
    loading: boolean
    payload: IProvider[]
}

interface IFetchProvidersError {
    type: typeof FETCH_PROVIDERS_ERROR
    loading: boolean
    payload: any
}

interface IFetchProviderStart {
    type: typeof FETCH_PROVIDER_START
    loading: boolean
}

interface IFetchProviderSuccess {
    type: typeof FETCH_PROVIDER_SUCCESS
    loading: boolean
    payload: IProvider
}

interface IFetchProviderError {
    type: typeof FETCH_PROVIDER_ERROR
    loading: boolean
    payload: any
}

export type IProvidersActionTypes =
    IFetchProvidersStart | IFetchProvidersSuccess | IFetchProvidersError |
    IFetchProviderStart | IFetchProviderSuccess | IFetchProviderError
