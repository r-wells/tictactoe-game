import React from 'react';

import "./Winner.css";

const Winner = ({ position, name, gamesWon }) => {
    return <tr>
        <td>{position}</td>
        <td>{name}</td>
        <td>{gamesWon}</td>
    </tr>;
}

export default Winner;