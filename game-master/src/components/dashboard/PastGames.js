import React from 'react';
import PastGame from './PastGame';
import './LeaderBoard.css';

const PastGames = ({ games, user }) => {
    return <table>
        <caption>Past Games</caption>
        <thead>
            <tr>
                <th scope="col">Player</th>
                <th scope="col">Date</th>
                <th scope="col">Winner</th>
            </tr>
        </thead>
        <tbody>
            {games.map((game, index) => {
                return <PastGame key={index} date={game.date} opponent={game.opponent} result={game.result} userName={user} />
            })}
        </tbody>
    </table>;
}

export default PastGames;