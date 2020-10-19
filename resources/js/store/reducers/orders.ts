// Types
import {
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_ERROR,
    FETCH_ORDER_START,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_ERROR,
    CREATE_ORDER_START,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_ERROR
} from '../actions/actionTypes'

// Typescript
import {IOrdersActionTypes, IOrdersState} from '../../components/Orders/IOrders'

const initialState: IOrdersState = {
    orders: [],
    order: {},
    loading: true,
    error: null
}

export default function ordersReducer(
    state = initialState,
    action: IOrdersActionTypes): IOrdersState {
    switch (action.type) {
        case FETCH_ORDERS_START:
            return {
                ...state, loading: true
            }
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state, loading: false, orders: action.payload
            }
        case FETCH_ORDERS_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        case FETCH_ORDER_START:
            return {
                ...state, loading: true
            }
        case FETCH_ORDER_SUCCESS:
            return {
                ...state, loading: false, order: action.payload
            }
        case FETCH_ORDER_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        case CREATE_ORDER_START:
            return {
                ...state, loading: true
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state, loading: false, order: action.payload
            }
        case CREATE_ORDER_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        default:
            return state
    }
}
