import React from 'react';

const PastGame = ({ opponent, date, result, userName }) => {
    return <div className="winnerContainer">
        <span>Opponent: {opponent}</span>
        <span>Date: {date}</span>
        <span>Winner: {result === 'lost' ? opponent : userName}</span>
    </div>;
}

export default PastGame;