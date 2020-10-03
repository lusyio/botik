import {
    IContainersActionTypes,
    IContainersState
} from '../../components/Containers/IContainers';
import {
    FETCH_CONTAINERS_ERROR, FETCH_CONTAINERS_START, FETCH_CONTAINERS_SUCCESS,
    FETCH_CONTAINER_ERROR,
    FETCH_CONTAINER_START, FETCH_CONTAINER_SUCCESS
} from '../actions/actionTypes';

const initialState: IContainersState = {
    containers: [],
    container: {},
    loading: true,
    error: null
}

export default function containersReducer(
    state = initialState,
    action: IContainersActionTypes): IContainersState {
    switch (action.type) {
        case FETCH_CONTAINERS_START:
            return {
                ...state, loading: true
            }
        case FETCH_CONTAINERS_SUCCESS:
            return {
                ...state, loading: true, containers: action.payload
            }
        case FETCH_CONTAINERS_ERROR:
            return {
                ...state, loading: true, error: action.payload
            }
        case FETCH_CONTAINER_START:
            return {
                ...state, loading: true
            }
        case FETCH_CONTAINER_SUCCESS:
            return {
                ...state, loading: true, container: action.payload
            }
        case FETCH_CONTAINER_ERROR:
            return {
                ...state, loading: true, error: action.payload
            }
        default:
            return state
    }
}
