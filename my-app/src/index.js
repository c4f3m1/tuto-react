// Carlos Ferrando Micó - 48607020Q
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker'; // Aplicaciones web progresivas


ReactDOM.render(<App />, document.getElementById('root')); // JSX

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
