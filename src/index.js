import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './Store'

ReactDOM.render(<App store={STORE}/>, document.getElementById('root'));
