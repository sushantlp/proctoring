import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom'

import App from './App';
import Home from './Home';
import End from './End';

ReactDOM.render(
    <Router>
        <div>
            <main>
            <Route exact path="/" component={App} />
            <Route path="/Home" component={Home} />
            <Route path="/End" component={End} />
            </main>
        </div>
    </Router>, 
    document.getElementById("root")
    
)
