import {
    CREATE_PRODUCT_ERROR,
    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_START,
    FETCH_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_ERROR,
    UPDATE_PRODUCT_START,
    UPDATE_PRODUCT_SUCCESS, FETCH_PRODUCT_PRICE
} from './actionTypes'

import axios, {AxiosError} from 'axios'

export const fetchProducts = () => async dispatch => {
    await dispatch({
        type: FETCH_PRODUCTS_START
    })

    const url = '/api/products'
    axios.get(url)
        .then((answer) => {
            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: answer.data
            })
        })
        .catch((error: AxiosError) => {
            dispatch({
                type: FETCH_PRODUCTS_ERROR,
                payload: error.response
            })
        })
}

export const fetchProductById = (id) => async dispatch => {
    await dispatch({
        type: FETCH_PRODUCT_START
    })

    const url = `/api/products/${id}`
    axios
        .get(url)
        .then((answer) => {
            dispatch({
                type: FETCH_PRODUCT_SUCCESS,
                payload: answer.data
            })
        })
        .catch((error: AxiosError) => {
            dispatch({
                type: FETCH_PRODUCT_ERROR,
                payload: error.response
            })
        })
}

export const createProduct = (data) => async dispatch => {
    const formData = new FormData()
    Object.entries(data).map(([key, val]) => {
        return formData.append(key, val)
    })
    await dispatch({
        type: CREATE_PRODUCT_START
    })
    const url = '/api/products'
    axios
        .post(url, formData)
        .then((answer) => {
            dispatch({
                type: CREATE_PRODUCT_SUCCESS,
                payload: answer.data
            })
        })
        .catch((error: AxiosError) => {
            dispatch({
                type: CREATE_PRODUCT_ERROR,
                payload: error.response
            })
        })
}

export const updateProduct = (id, data) => async dispatch => {
    const formData = new FormData()
    Object.entries(data).map(([key, val]) => {
        return formData.append(key, val)
    })
    await dispatch({
        type: UPDATE_PRODUCT_START
    })
    const url = `/api/products/${id}`
    axios
        .put(url, formData)
        .then((answer) => {
            dispatch({
                type: UPDATE_PRODUCT_SUCCESS,
                payload: answer.data
            })
        })
        .catch((error: AxiosError) => {
            dispatch({
                type: UPDATE_PRODUCT_ERROR,
                payload: error.response
            })
        })
}

export const fetchProductPrice = (priceCny) =>
    async dispatch => {
        const data = {
            priceCny
        }
        const url = '/api/products/calculateprice'
        axios
            .post(url, data)
            .then((answer) => {
                    dispatch({
                        type: FETCH_PRODUCT_PRICE,
                        payload: answer.data,
                    })
                }
            )
    }
