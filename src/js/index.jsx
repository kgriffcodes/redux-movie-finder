import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './rootReducer';
import App from './app';
import persistStore from 'redux-persist/es/persistStore';

// eslint-disable-next-line no-underscore-dangle

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
	document.getElementById('root')
);
