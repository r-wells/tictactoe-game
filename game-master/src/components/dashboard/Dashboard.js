import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Winner from './Winner';
import PastGame from './PastGame';

import "./Dashboard.css";

class Dashboard extends Component {
    state = {
        pastGames: [
            {
                date: '06-19-2021',
                opponent: 'John Cena',
                result: 'won'
            },
            {
                date: '06-15-2021',
                opponent: 'Caesar',
                result: 'won'
            },
            {
                date: '06-14-2021',
                opponent: 'Caesar',
                result: 'lost'
            },
            {
                date: '06-13-2021',
                opponent: 'John Cena',
                result: 'won'
            },
            {
                date: '06-13-2021',
                opponent: 'Markymark25',
                result: 'lost'
            },
        ],
        onlineUsers: [
            {
                username: 'John Cena',
                gamesPlayed: 20,
                gamesWon: 19
            },
            {
                username: 'Caesar',
                gamesPlayed: 15,
                gamesWon: 12
            },
            {
                username: 'Markymark25',
                gamesPlayed: 31,
                gamesWon: 26
            },
            {
                username: 'r-wells',
                gamesPlayed: 15,
                gamesWon: 15
            }
        ],
        winners: [{
            username: 'John Cena',
            gamesPlayed: 20,
            gamesWon: 19
        },
        {
            username: 'Caesar',
            gamesPlayed: 15,
            gamesWon: 12
        },
        {
            username: 'Markymark25',
            gamesPlayed: 31,
            gamesWon: 26
        }, {
            username: 'r-wells',
            gamesPlayed: 15,
            gamesWon: 15
        }],
        user: 'r-wells'
    };
    render() {
        return <div>
            <h2>Dashboard</h2>
            <Link to="/play">Play</Link>
            <div className="dashboardContainer">
                <div className="dashboardContentContainer">
                    <h3>Leaderboard</h3>
                    {this.state.winners.map((winner, index) => {
                        return <Winner key={index} position={index} name={winner.username} gamesWon={winner.gamesWon} />
                    })}
                </div>
                <div className="dashboardContentContainer">
                    <h3>Past Games</h3>
                    {this.state.pastGames.map((game, index) => {
                        return <PastGame key={index} date={game.date} opponent={game.opponent} result={game.result} userName={this.state.user} />
                    })}
                </div>
            </div>
        </div>;
    }
}

export default Dashboard;