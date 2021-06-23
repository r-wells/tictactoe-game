import React from 'react';

import "./Winner.css";

const Winner = ({ position, name, gamesWon }) => {
    return <div className="winnerContainer">
        <span>Place: {position}</span>
        <span>{name}</span>
        <span>{gamesWon}</span>
    </div>;
}

export default Winner;