import React from 'react';
import { Route } from 'react-router-dom';
import Game from '../tictactoe/Game';
import Dashboard from '../dashboard/Dashboard';

const Authenticated = () => {
    return <React.Fragment>
        <Route path="/dashboard">
            <Dashboard />
        </Route>
        <Route path="/play">
            <Game />
        </Route>
    </React.Fragment>;
}

export default Authenticated;