import React from 'react';
import { findWinner, getComputerMove } from './helperFunctions';

import Cell from './Cell';
import './Board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: Array(9).fill(null),
            nextPlayer: 'X',
            moves: 0,
            opponent: ''
        }
    }

    _handleCellClick = (i) => {
        const cells = this.state.cells;
        cells[i] = this.state.nextPlayer;
        this.setState({
            cells,
            nextPlayer: this.state.nextPlayer === 'X' ? 'O' : 'X',
            moves: this.state.moves + 1
        });
    }

    _resetBoard = () => {
        this.setState({
            cells: Array(9).fill(null),
            moves: 0,
            nextPlayer: 'X',
        })
    }

    _renderCell = (i) => {
        return <Cell clickHandler={() => this._handleCellClick(i)} value={this.state.cells[i]} />;
    }


    render() {
        const winner = findWinner(this.state.cells);
        let status;
        if (winner === null) {
            status = this.state.moves === 9 ? 'Game is a draw!' : `Next player: ${this.state.nextPlayer}`;
        }
        else {
            status = `Winner: ${winner}`;
        }
        return (
            <div className="boardWrapper">
                <h2 className="status">{status}</h2>
                <div className="boardContainer">
                    <div className="boardRow">
                        {this._renderCell(0)}
                        {this._renderCell(1)}
                        {this._renderCell(2)}
                    </div>
                    <div className="boardRow">
                        {this._renderCell(3)}
                        {this._renderCell(4)}
                        {this._renderCell(5)}
                    </div>
                    <div className="boardRow">
                        {this._renderCell(6)}
                        {this._renderCell(7)}
                        {this._renderCell(8)}
                    </div>
                </div>
                {this.state.moves === 9 || winner !== null && <button onClick={() => this._resetBoard()}>Play Again?</button>}
            </div>
        );
    }
}