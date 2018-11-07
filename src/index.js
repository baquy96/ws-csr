import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { registerObserver } from 'react-perf-devtool'


import history from './helpers/History';
import Home from './components/Home';
import About from './components/About';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const options = {
    shouldLog: true,
    port: 8080,
    timeout: 12000 // Load the extension after 12 sec.
  }

function callback(measures) {
// do something with the measures
}

window.observer = registerObserver({}, callback)

  
ReactDOM.render(
    <Router history={history}>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </Switch>
        </App>
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
