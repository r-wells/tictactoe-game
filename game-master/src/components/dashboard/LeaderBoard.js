import React from 'react';
import Winner from './Winner';
import './LeaderBoard.css';

const LeaderBoard = ({ winners }) => {
    return <table>
        <caption>Leaderboard</caption>
        <thead>
            <tr>
                <th scope="col">Place</th>
                <th scope="col">Player</th>
                <th scope="col">Games Won</th>
            </tr>
        </thead>
        <tbody>
            {winners.map((winner, index) => {
                return <Winner key={index} position={index + 1} name={winner.username} gamesWon={winner.gamesWon} />
            })}
        </tbody>
    </table>;
}

export default LeaderBoard;