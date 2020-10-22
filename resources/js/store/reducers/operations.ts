// Types
import {
    FETCH_OPERATIONS_SUCCESS,
    FETCH_OPERATIONS_START,
    FETCH_OPERATIONS_ERROR,
    FETCH_OPERATION_START,
    FETCH_OPERATION_SUCCESS,
    FETCH_OPERATION_ERROR,
    CREATE_OPERATION_SUCCESS,
    CREATE_OPERATION_ERROR,
    CREATE_OPERATION_START
} from '../actions/actionTypes';

// Typescript
import {
    IOperationsState,
    IOperationsActionTypes
} from '../../components/Operations/IOperations';

const initialState: IOperationsState = {
    operations: [],
    operation: {},
    loading: true,
    error: null
}

export default function operationsReducer(
    state = initialState,
    action: IOperationsActionTypes): IOperationsState {
    switch (action.type) {
        case FETCH_OPERATIONS_START:
            return {
                ...state, loading: true
            }
        case FETCH_OPERATIONS_SUCCESS:
            return {
                ...state, loading: false, operations: action.payload
            }
        case FETCH_OPERATIONS_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        case FETCH_OPERATION_START:
            return {
                ...state, loading: true
            }
        case FETCH_OPERATION_SUCCESS:
            return {
                ...state, loading: false, operation: action.payload
            }
        case FETCH_OPERATION_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        case CREATE_OPERATION_START:
            return {
                ...state, loading: true
            }
        case CREATE_OPERATION_SUCCESS:
            return {
                ...state, loading: false, operation: action.payload
            }
        case CREATE_OPERATION_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        default:
            return state
    }
}
