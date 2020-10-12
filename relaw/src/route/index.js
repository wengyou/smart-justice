import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Identity from '../pages/identity/index';
import Home from '../pages/home/index';
import Enterprise from '../pages/enterprise/index';
import Personal from '../pages/personal/index';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Identity} />
                <Route path='/home'component={Home} />
                <Route path='/enterprise' component={Enterprise} />
                <Route path='/personal' component={Personal} />
                <Redirect from='*' to='/' />
            </Switch>
        </Router>
    )
};

export default Routers;
