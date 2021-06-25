import React, { useState } from 'react';

import Board from './Board';
import Button from '../generic/Button';
import "./Game.css";

const Game = ({ userName }) => {
    const [gameType, setGameType] = useState(null);

    return (
        <div className="game">
            <div className="gameBoard">
                {gameType === null ? <UserChoiceComponent gameTypeClickHandler={setGameType} /> : <Board gameType={gameType} />}
            </div>
        </div>
    );
}

const UserChoiceComponent = ({ gameTypeClickHandler }) => {
    return <React.Fragment>
        <h1>Choose your opponent</h1>
        <div className="gameButtonContainer">
            <Button text="Human" clickHandler={() => gameTypeClickHandler('human')} />
            <Button text="Computer" clickHandler={() => gameTypeClickHandler('computer')} />
        </div>
    </React.Fragment>
}

export default Game;