import React from 'react';
import ReactDOM from 'react-dom';
//import AppBackend from './components/Pages/AppBackend/AppBackend';
import AppFrontend from './components/Pages/AppFrontend/AppFrontend';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <AppFrontend />,
    //<AppBackend />,
  document.getElementById('root'));
//registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
