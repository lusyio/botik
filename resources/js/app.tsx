// React
import React from 'react'
import ReactDOM from 'react-dom';

// Third-party
import {BrowserRouter as Router} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';

// App
import Index from './index'
import rootReducer from './store/reducers/rootReducer';

const ReduxDevTools =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const middleware = thunk as ThunkMiddleware;

const store = createStore(
    rootReducer,
    compose(applyMiddleware(middleware), ReduxDevTools)
)

const application = (
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Index/>
            </Router>
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(application, document.getElementById('root'));
