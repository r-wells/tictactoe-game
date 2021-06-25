import React from 'react';

import Board from './Board';
import "./Game.css";

const Game = () => {

    return (
        <div className="game">
            <div className="gameBoard">
                <Board />
            </div>
        </div>
    );
}

export default Game;