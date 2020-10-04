import {
    IProvidersActionTypes,
    IProvidersState
} from '../../components/Providers/IProviders';
import {
    FETCH_PROVIDERS_ERROR, FETCH_PROVIDERS_START, FETCH_PROVIDERS_SUCCESS,
    FETCH_PROVIDER_ERROR,
    FETCH_PROVIDER_START, FETCH_PROVIDER_SUCCESS
} from '../actions/actionTypes';

const initialState: IProvidersState = {
    providers: [],
    provider: {},
    loading: true,
    error: null
}

export default function providersReducer(
    state = initialState,
    action: IProvidersActionTypes): IProvidersState {
    switch (action.type) {
        case FETCH_PROVIDERS_START:
            return {
                ...state, loading: true
            }
        case FETCH_PROVIDERS_SUCCESS:
            return {
                ...state, loading: false, providers: action.payload
            }
        case FETCH_PROVIDERS_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        case FETCH_PROVIDER_START:
            return {
                ...state, loading: true
            }
        case FETCH_PROVIDER_SUCCESS:
            return {
                ...state, loading: false, provider: action.payload
            }
        case FETCH_PROVIDER_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        default:
            return state
    }
}
