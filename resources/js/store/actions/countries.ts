import {
    FETCH_COUNTRIES_START,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_COUNTRIES_ERROR
} from './actionTypes'
import axios, {AxiosError} from 'axios'

export const fetchCountries = () => async dispatch => {
    await dispatch({
        type: FETCH_COUNTRIES_START
    })

    const url = '/api/countries'
    axios
        .get(url)
        .then((answer) => {
            dispatch({
                type: FETCH_COUNTRIES_SUCCESS,
                payload: answer.data
            })
        })
        .catch((error: AxiosError) => {
            dispatch({
                type: FETCH_COUNTRIES_ERROR,
                payload: error.response
            })
        })
}
