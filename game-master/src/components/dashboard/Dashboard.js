import React, { Component } from 'react';
import PastGames from './PastGames';
import LeaderBoard from './LeaderBoard';
import Button from '../generic/Button';

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

    _playClickHandler = () => {
        window.location.href = '/play';
    }

    render() {
        console.log('this.props.username', this.props.userName);
        return <div>
            <h1>Welcome back {this.props.userName}!</h1>
            <div className="dashboardHeader">
                <h2>Ready to play?</h2><Button text="Play" clickHandler={this._playClickHandler} />
            </div>
            <div className="dashboardContainer">
                <div className="dashboardContentContainer">
                    <LeaderBoard winners={this.state.winners} />
                </div>
                <div className="dashboardContentContainer">
                    <PastGames games={this.state.pastGames} user={this.state.user} />
                </div>
            </div>
        </div>;
    }
}

export default Dashboard;