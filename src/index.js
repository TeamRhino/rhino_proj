import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { history } from './helpers';
import {
    Router
=======
import {
    BrowserRouter
>>>>>>> master
  } from 'react-router-dom'
import { store } from './helpers';
import 'semantic-ui-css/semantic.min.css';

// setup fake backend
import { configureFakeBackend } from './helpers';

configureFakeBackend();

ReactDOM.render(
<<<<<<< HEAD
        <Router history={history}>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>,
=======
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
>>>>>>> master
        document.getElementById('root'));
registerServiceWorker();
