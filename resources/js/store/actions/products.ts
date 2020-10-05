import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_START,
    FETCH_PRODUCT_SUCCESS
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
