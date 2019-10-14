import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login/index';
import Game from './Pages/Game/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exatc component={Login}/>
                <Route path="/game" component={Game}/>
            </Switch>
        </BrowserRouter>
    );
}