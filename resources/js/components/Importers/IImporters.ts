import {
    FETCH_IMPORTERS_ERROR,
    FETCH_IMPORTERS_START,
    FETCH_IMPORTERS_SUCCESS,
    FETCH_IMPORTER_ERROR,
    FETCH_IMPORTER_START,
    FETCH_IMPORTER_SUCCESS
} from '../../store/actions/actionTypes';

export interface IImporter {
    id: number | null
    nameRu: string
    nameEn: string
    address: string
    phone: string
    createdAt?: number
    updatedAt?: number
}

export interface IImportersState {
    importers: IImporter[] | []
    importer: IImporter | {}
    loading: boolean;
    error: any
}

export interface IImportersRootState {
    importersState: IImportersState
}

interface IFetchImportersStart {
    type: typeof FETCH_IMPORTERS_START
    loading: boolean
}

interface IFetchImportersSuccess {
    payload: IImporter[]
    type: typeof FETCH_IMPORTERS_SUCCESS
    loading: boolean
}

interface IFetchImportersError {
    loading: boolean
    payload: any
    type: typeof FETCH_IMPORTERS_ERROR
}

interface IFetchImporterStart {
    type: typeof FETCH_IMPORTER_START
    loading: boolean
}

interface IFetchImporterSuccess {
    payload: IImporter;
    type: typeof FETCH_IMPORTER_SUCCESS
    loading: boolean
}

interface IFetchImporterError {
    loading: boolean
    payload: any
    type: typeof FETCH_IMPORTER_ERROR
}

export type IImportersActionTypes =
    IFetchImportersStart | IFetchImportersSuccess | IFetchImportersError |
    IFetchImporterStart | IFetchImporterSuccess | IFetchImporterError
