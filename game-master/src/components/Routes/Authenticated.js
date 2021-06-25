import React from 'react';
import { Route } from 'react-router-dom';
import Game from '../tictactoe/Game';
import Dashboard from '../dashboard/Dashboard';

const Authenticated = ({ userName }) => {
    return <React.Fragment>
        <Route path="/dashboard">
            <Dashboard userName={userName ? userName : getUserNameIfUndefined()} />
        </Route>
        <Route path="/play">
            <Game userName={userName ? userName : getUserNameIfUndefined()} />
        </Route>
    </React.Fragment>;
}

const getUserNameIfUndefined = () => {
    let userNameString = localStorage.getItem('userName');
    return JSON.parse(userNameString);
}

export default Authenticated;