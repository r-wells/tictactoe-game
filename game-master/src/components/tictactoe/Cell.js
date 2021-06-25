import React from 'react';

import './Cell.css';

export default function Cell({ value, clickHandler }) {
    return (
        <button className="cell" onClick={() => clickHandler()}>
            {value}
        </button>
    );
}