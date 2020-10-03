// Types
import {
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCT_START
} from '../actions/actionTypes';

// Typescript
import {
    IProductsActionTypes,
    IProductsState
} from '../../components/Products/IProducts';

const initialState: IProductsState = {
    products: [],
    product: {},
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
        default:
            return state
    }
}
