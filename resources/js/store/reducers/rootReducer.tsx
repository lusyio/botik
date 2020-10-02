// Third-party
import {combineReducers} from 'redux';

// Reducers
import importersReducer from './importers';
import productsReducer from './products';

export default combineReducers({
    importersState: importersReducer,
    productsState: productsReducer
})
