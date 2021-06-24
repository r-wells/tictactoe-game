import React from 'react';
import Button from './generic/Button';

import "./Home.css";

const Home = () => {
    return <div className="homeContainer">
        <h1>Welcome!</h1>
        <div className="homeInnerContainer">
            <h3>What do you want to do?</h3>
            <div className="buttonContainer">
                <Button text="Play A Game" />
                <Button text="Register" />
            </div>
        </div>
    </div>;
}

export default Home;