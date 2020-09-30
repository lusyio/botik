// Types
import {
    FETCH_IMPORTERS_SUCCESS,
    FETCH_IMPORTERS_START,
    FETCH_IMPORTERS_ERROR,
    FETCH_IMPORTER_START,
    FETCH_IMPORTER_SUCCESS,
    FETCH_IMPORTER_ERROR
} from '../actions/actionTypes';

// Typescript
import {IImportersState, ImportersActionTypes}
    from '../../components/ImportersTable/IImporters';

const initialState: IImportersState = {
    importers: [],
    importer: {
        id: null,
        nameRu: '',
        nameEn: '',
        address: '',
        phone: '',
    },
    loading: true,
    error: null
}

export default function importersReducer(
    state = initialState,
    action: ImportersActionTypes): IImportersState {
    switch (action.type) {
        case FETCH_IMPORTERS_START:
            return {
                ...state, loading: true
            }
        case FETCH_IMPORTERS_SUCCESS:
            return {
                ...state, importers: action.payload, loading: false
            }
        case FETCH_IMPORTERS_ERROR:
            return {
                ...state, error: action.payload
            }
        case FETCH_IMPORTER_START:
            return {
                ...state, loading: true
            }
        case FETCH_IMPORTER_SUCCESS:
            return {
                ...state, importer: action.payload, loading: false
            }
        case FETCH_IMPORTER_ERROR:
            return {
                ...state, error: action.payload
            }
        default:
            return state
    }
}
