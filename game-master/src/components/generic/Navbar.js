import React from 'react';

import './NavBar.css'

const NavBar = ({ loggedIn }) => {
    return <ul className="navbar">
        <li className="navItem" onClick={() => _clickHandler('home')}>Home</li>
        <li className="navItem" onClick={() => _clickHandler('dashboard')}>Dashboard</li>
        <li className="navItem" onClick={() => _clickHandler('play')}>Play</li>
        <li className="navItem" onClick={() => _clickHandler(loggedIn ? 'logout' : 'login')}>{loggedIn ? "Logout" : "Login"}</li>
    </ul>;
}

const _clickHandler = (type) => {
    if (type === 'logout') {
        _logUserOut();
        window.location.href = "/home";
    } else {
        window.location.href = `/${type}`
    }
}

const _logUserOut = () => {
    localStorage.clear();
}

export default NavBar;