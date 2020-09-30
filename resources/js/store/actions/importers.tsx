import {
    FETCH_IMPORTERS_ERROR,
    FETCH_IMPORTERS_START,
    FETCH_IMPORTERS_SUCCESS
} from './actionTypes';
import axios, {AxiosError} from 'axios';

export const fetchImporters = () => async dispatch => {
    await dispatch({
        type: FETCH_IMPORTERS_START,
    });

    const url = '/api/importers'

    axios
        .get(url)
        .then((answer) => {
            dispatch({
                type: FETCH_IMPORTERS_SUCCESS,
                payload: answer.data
            });
        })
        .catch((error: AxiosError) => {
            dispatch({
                type: FETCH_IMPORTERS_ERROR,
                payload: error.response
            });
        })
}
