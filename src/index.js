import React from 'react';
import ReactDOM from 'react-dom';
import { logger } from "redux-logger"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import App from './App';
import appReducer from './redux/statereducer';

let store = createStore(appReducer, applyMiddleware(logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


