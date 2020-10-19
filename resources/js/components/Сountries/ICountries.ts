import {
    FETCH_COUNTRIES_ERROR,
    FETCH_COUNTRIES_START,
    FETCH_COUNTRIES_SUCCESS
} from '../../store/actions/actionTypes'

export interface ICountry {
    id: number
    name: string
    providers: []
    createdAt?: number
    updatedAt?: number
}

export interface ICountriesState {
    countries: ICountry[]
    loading: boolean;
    error: any
}

export interface ICountriesRootState {
    countriesState: ICountriesState
}

interface IFetchCountriesStart {
    type: typeof FETCH_COUNTRIES_START
    loading: boolean
}

interface IFetchCountriesSuccess {
    type: typeof FETCH_COUNTRIES_SUCCESS
    loading: boolean
    payload: ICountry[]
}

interface IFetchCountriesError {
    type: typeof FETCH_COUNTRIES_ERROR
    loading: boolean
    payload: any
}

export type ICountriesActionTypes =
    IFetchCountriesStart | IFetchCountriesSuccess | IFetchCountriesError
