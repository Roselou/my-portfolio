import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes';

ReactDOM.render(
<Router>
    <div>
    <App />
    <Routes />
    </div>
</Router>, document.getElementById('root'));

