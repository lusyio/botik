import {
    CREATE_OPERATION_ERROR,
    CREATE_OPERATION_START,
    CREATE_OPERATION_SUCCESS,
    FETCH_OPERATIONS_ERROR,
    FETCH_OPERATIONS_START,
    FETCH_OPERATIONS_SUCCESS,
    FETCH_OPERATION_ERROR,
    FETCH_OPERATION_START,
    FETCH_OPERATION_SUCCESS
} from './actionTypes';
import axios, {AxiosError} from 'axios';

export const fetchOperations = () => async dispatch => {
    await dispatch({
        type: FETCH_OPERATIONS_START
    })

    const url = '/api/operations'
    axios
        .get(url)
        .then((answer) => {
            dispatch({
                type: FETCH_OPERATIONS_SUCCESS,
                payload: answer.data
            })
        })
        .catch((error: AxiosError) => {
            dispatch({
                type: FETCH_OPERATIONS_ERROR,
                payload: error.response
            })
        })
}

export const fetchOperationById = (id) => async dispatch => {
    await dispatch({
        type: FETCH_OPERATION_START,
    })

    const url = `/api/operations/${id}`
    axios
        .get(url)
        .then((answer) => {
            dispatch({
                type: FETCH_OPERATION_SUCCESS,
                payload: answer.data
            })
        })
        .catch((error: AxiosError) => {
            dispatch({
                type: FETCH_OPERATION_ERROR,
                payload: error.response
            })
        })
}

export const createOperation = (data) => async dispatch => {
    await dispatch({
        type: CREATE_OPERATION_START,
    })
    const url = '/api/operations'
    axios
        .post(url, data)
        .then((answer) => {
            dispatch({
                type: CREATE_OPERATION_SUCCESS,
                payload: answer.data
            })
        })
        .catch((error: AxiosError) => {
            dispatch({
                type: CREATE_OPERATION_ERROR,
                payload: error.response
            })
        })
}
