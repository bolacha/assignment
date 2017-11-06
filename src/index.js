import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/" component={} />
                </Switch>
            </div>
        </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
