// Third-party
import {combineReducers} from 'redux';

// Reducers
import importersReducer from './importers';

export default combineReducers({
    importersState: importersReducer
})
