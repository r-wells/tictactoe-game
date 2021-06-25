import React from 'react';
import { Route } from 'react-router-dom';
import Game from '../tictactoe/Game';
import Dashboard from '../dashboard/Dashboard';

const Authenticated = ({ userName }) => {
    return <React.Fragment>
        <Route path="/dashboard">
            <Dashboard userName={userName} />
        </Route>
        <Route path="/play">
            <Game userName={userName} />
        </Route>
    </React.Fragment>;
}

export default Authenticated;