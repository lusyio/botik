// Third-party
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

// Reducers
import operationsReducer from './operations'
import productsReducer from './products'
import providersReducer from './providers'
import containersReducer from './containers'
import catalogsReducer from './catalogs'
import countryReducer from './countries'
import ordersReducer from './orders'

export default combineReducers({
    operationsState: operationsReducer,
    productsState: productsReducer,
    providersState: providersReducer,
    ordersState: ordersReducer,
    containersState: containersReducer,
    catalogsState: catalogsReducer,
    countriesState: countryReducer,
    form: formReducer
})
