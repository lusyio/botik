import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_START,
    FETCH_PRODUCT_SUCCESS
} from '../../store/actions/actionTypes';

export interface IProduct {
    id: number | null;
    nameRu: string;
    nameEn?: string;
    aboutRu?: string;
    aboutEn?: string;
    catalogId?: number;
    image: string;
    price: {
        rub?: number;
        usd?: number;
        cny: number;
    };
    weightNetto: number;
    weightBrutto: number;
    createdAt?: number;
    updatedAt?: number;
}

export interface IProductsState {
    products: IProduct[] | [];
    product: IProduct | {};
    loading: boolean;
    error: any
}

export interface IProductsRootState {
    productsState: IProductsState
}

interface IFetchProductsStart {
    type: typeof FETCH_PRODUCTS_START,
    loading: boolean
}

interface IFetchProductsSuccess {
    type: typeof FETCH_PRODUCTS_SUCCESS,
    payload: IProduct[]
    loading: boolean
}

interface IFetchProductsError {
    type: typeof FETCH_PRODUCTS_ERROR,
    payload: any
    loading: boolean
}

interface IFetchProductStart {
    type: typeof FETCH_PRODUCT_START,
    loading: boolean
}

interface IFetchProductSuccess {
    type: typeof FETCH_PRODUCT_SUCCESS,
    payload: IProduct
    loading: boolean
}

interface IFetchProductError {
    type: typeof FETCH_PRODUCT_ERROR,
    payload: any
    loading: boolean
}

export type IProductsActionTypes =
    IFetchProductsStart | IFetchProductsSuccess | IFetchProductsError |
    IFetchProductStart | IFetchProductSuccess | IFetchProductError
