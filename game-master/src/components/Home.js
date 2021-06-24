import React from 'react';
import Button from './generic/Button';

import "./Home.css";

const Home = ({ isLoggedIn }) => {
    return <div className="homeContainer">
        <div className="homeInnerContainer">
            <h1 className="header">Tic. Tac. Toe.</h1>
            <h2>Possibly the best game ever made</h2>
            <h3 className="header">{isLoggedIn ? "Ready to Play?" : "Login to Play!"}</h3>
            <div className="buttonContainer">
                {isLoggedIn
                    ? <Button text="Play A Game" clickHandler={() => window.location.href = "/play"} size="large" />
                    : <Button text="Login" clickHandler={() => window.location.href = "/login"} size="large" />
                }
            </div>
        </div>
    </div>;
}

export default Home;