import {
    FETCH_IMPORTERS_ERROR,
    FETCH_IMPORTERS_START,
    FETCH_IMPORTERS_SUCCESS
} from '../../store/actions/actionTypes';

export interface IImporter {
    id: number;
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
    loading: boolean,
    error: any
}

export interface IImportersRootState {
    importersState: {
        importers: IImporter[],
        loading: boolean,
        error: any
    };
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

export type ImportersActionTypes =
    FetchImportersStart | FetchImportersSuccess | FetchImportersError
