import React from 'react';
import ReactDOM from 'react-dom';


import AppFrontend from 'pages/appFrontend/appFrontend';
//import AppBackend from 'pages/appBackend/appBackend';
//import Login from 'pages/login/login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <AppFrontend />,
    //<AppBackend />,
    //<Login />,
  document.getElementById('root'));
//registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
