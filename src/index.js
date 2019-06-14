import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Info from "./Ring";
import Info from "./Info";
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Info />, document.getElementById('info'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
