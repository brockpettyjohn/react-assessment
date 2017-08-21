import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import CreateToDo from './Create_To_Do';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route exact path='/toDo' component={CreateToDo}></Route>
        </Switch>
    </Router>, document.getElementById('root'));
registerServiceWorker();
