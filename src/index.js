import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import authReducer from './Store/Reducers/auth';
import forgotReducer from './Store/Reducers/forgot';
import helperReducer from './Store/Reducers/helper';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchAuth } from './Store/Sagas/rootSaga';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ auth: authReducer, forgot: forgotReducer, helper: helperReducer });
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAuth);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
