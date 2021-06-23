import React from 'react';

export default function Cell({ value, clickHandler }) {
    return (
        <button className="cell" onClick={() => clickHandler()}>
            {value}
        </button>
    );
}