import {
    FETCH_IMPORTERS_ERROR,
    FETCH_IMPORTERS_START,
    FETCH_IMPORTERS_SUCCESS,
    FETCH_IMPORTER_ERROR,
    FETCH_IMPORTER_START,
    FETCH_IMPORTER_SUCCESS
} from '../../store/actions/actionTypes';

export interface IImporter {
    id: number | null;
    nameRu: string;
    nameEn: string;
    address: string;
    phone: string;
}

export interface IImporters {
    importers: IImporter[]
}

export interface IImportersState {
    importers: IImporter[],
    importer: IImporter,
    loading: boolean,
    error: any
}

export interface IImportersRootState {
    importersState: IImportersState
}

interface FetchImportersStart {
    type: typeof FETCH_IMPORTERS_START,
    loading: boolean
}

interface FetchImportersSuccess {
    payload: IImporter[];
    type: typeof FETCH_IMPORTERS_SUCCESS,
    loading: boolean
}

interface FetchImportersError {
    payload: any;
    type: typeof FETCH_IMPORTERS_ERROR,
}

interface FetchImporterStart {
    type: typeof FETCH_IMPORTER_START,
    loading: boolean
}

interface FetchImporterSuccess {
    payload: IImporter;
    type: typeof FETCH_IMPORTER_SUCCESS,
    loading: boolean
}

interface FetchImporterError {
    payload: any;
    type: typeof FETCH_IMPORTER_ERROR,
}

export type ImportersActionTypes =
    FetchImportersStart | FetchImportersSuccess | FetchImportersError |
    FetchImporterStart | FetchImporterSuccess | FetchImporterError
