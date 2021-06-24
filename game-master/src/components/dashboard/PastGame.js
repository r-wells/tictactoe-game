import React from 'react';

const PastGame = ({ opponent, date, result, userName }) => {
    return <tr>
        <td>{opponent}</td>
        <td>{date}</td>
        <td>{result === 'lost' ? opponent : userName}</td>
    </tr>;
}

export default PastGame;