import React from 'react';
// import Logo from '../images/ttt-logo.png';

import './NavBar.css'

const NavBar = ({ loggedIn }) => {
    return <ul className="navbar">
        <li className="navItem">Home</li>
        <li className="navItem">Play</li>
        <li className="navItem">{loggedIn ? "Logout" : "Login"}</li>
    </ul>;
}

export default NavBar;