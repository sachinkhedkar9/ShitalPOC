import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Button} from "react-bootstrap";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import About from './components/About';
import Dashboard from './components/Dashboard';
import { Router, Route, hashHistory } from 'react-router';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
    	{ /* Default Route */ }
    	<Route path="/" component={App}/>
    	 { /* Routes */ }
         <Route path="about" component={About}/>
         <Route path="dashboard" component={Dashboard}/>
         
    </Router>
    
    </Provider>,
    document.getElementById('root')
);
