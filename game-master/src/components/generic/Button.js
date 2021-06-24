import React from 'react';

import './Button.css';

const Button = ({ text, clickHandler, styles }) => {
    return <button className="defaultButton" style={styles} onClick={() => clickHandler()}>{text}</button>;
}

export default Button;