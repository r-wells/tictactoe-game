import React from 'react';

import './Button.css';

const Button = ({ text, clickHandler, styles, size }) => {
    return <button className={size === "large" ? "defaultButton" : "smallButton"} style={styles} onClick={() => clickHandler()}>{text}</button>;
}

export default Button;