// Third-party
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'

// Reducers
import importersReducer from './importers';
import productsReducer from './products';
import providersReducer from './providers';

export default combineReducers({
    importersState: importersReducer,
    productsState: productsReducer,
    providersState: providersReducer,
    form: formReducer
})
