import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

ReactDOM.render(
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/" component={LandingPage} />
                </Switch>
            </div>
        </BrowserRouter>
    , document.getElementById('root'));
