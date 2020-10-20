// Types
import {
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCT_START,
    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_ERROR,
    UPDATE_PRODUCT_START,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_ERROR, FETCH_PRODUCT_PRICE
} from '../actions/actionTypes'

// Typescript
import {
    IProductsActionTypes,
    IProductsState
} from '../../components/Products/IProducts'

const initialState: IProductsState = {
    products: [],
    product: {},
    price: {},
    loading: true,
    error: null
}

export default function productsReducer(
    state = initialState,
    action: IProductsActionTypes): IProductsState {
    switch (action.type) {
        case FETCH_PRODUCTS_START:
            return {
                ...state, loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state, loading: false, products: action.payload
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        case FETCH_PRODUCT_START:
            return {
                ...state, loading: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state, loading: false, product: action.payload
            }
        case FETCH_PRODUCT_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        case CREATE_PRODUCT_START:
            return {
                ...state, loading: true
            }
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state, loading: false, product: action.payload
            }
        case CREATE_PRODUCT_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        case UPDATE_PRODUCT_START:
            return {
                ...state, loading: true
            }
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state, loading: false, product: action.payload
            }
        case UPDATE_PRODUCT_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        case FETCH_PRODUCT_PRICE:
            return {
                ...state, price: action.payload.price
            }
        default:
            return state
    }
}
