// Types
import {
    FETCH_IMPORTERS_SUCCESS,
    FETCH_IMPORTERS_START,
    FETCH_IMPORTERS_ERROR
} from '../actions/actionTypes';

// Typescript
import {IImportersState, ImportersActionTypes}
    from '../../components/ImportersTable/IImporters';

const initialState: IImportersState = {
    importers: [],
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
        default:
            return state
    }
}
