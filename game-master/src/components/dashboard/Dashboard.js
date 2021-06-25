import React, { Component } from 'react';
import PastGames from './PastGames';
import LeaderBoard from './LeaderBoard';
import Button from '../generic/Button';
import axios from 'axios';

import "./Dashboard.css";

class Dashboard extends Component {
    state = {
        leaders: [],
        pastGames: []
    };

    async componentDidMount() {
        const leadersData = await axios.get('http://localhost:8081/get-leaderboard').then(res => res.data);
        let pastGamesData = await axios.post('http://localhost:8081/get-user-past-games', {
            username: this.props.userName
        }).then(res => res.data);
        pastGamesData = pastGamesData.past_games;
        leadersData.leaders.sort((a, b) => b.games_won - a.games_won);
        pastGamesData.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            }
            if (a.date > b.date) {
                return -1;
            }
            return 0;
        });
        this.setState({
            leaders: leadersData.leaders,
            pastGames: pastGamesData
        })
    }

    _playClickHandler = () => {
        window.location.href = '/play';
    }

    render() {
        return <div>
            <h1>Welcome back {this.props.userName}!</h1>
            <div className="dashboardHeader">
                <h2>Ready to play?</h2><Button text="Play" clickHandler={this._playClickHandler} />
            </div>
            <div className="dashboardContainer">
                <div className="dashboardContentContainer">
                    <LeaderBoard winners={this.state.leaders} />
                </div>
                <div className="dashboardContentContainer">
                    <PastGames games={this.state.pastGames} user={this.props.userName} />
                </div>
            </div>
        </div>;
    }
}

export default Dashboard;