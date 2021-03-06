import React from 'react';
import ReactDOM from 'react-dom';
import './tictactoe.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );

}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xTurn: true,
            description_text: "Tic Tac Toe game created by following a text-based tutorial.",
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xTurn ? 'X' : 'O';
        this.setState({
            squares: squares,
            xTurn: !this.state.xTurn,
        });
    }
    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => {
                this.handleClick(i);
            }}
        />;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
            document.querySelector(".status").style.color = "#008706";
        } else {
            status = 'Next player: ' + (this.state.xTurn ? 'X' : 'O');
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    state = {
        description_text: "Tic Tac Toe game created by following a text-based tutorial.",
    };
    render() {
        return (
            <div className="row">
                <div className="col-md-8" id="tictactoe_col">
                    <div className="card mb-8 box-shadow">
                        <div id="tictactoe_game" className="card-body">
                            <h4 className="card-title">Tic-Tac-Toe Game</h4>
                            <h6 className="card-subtitle mb-2 text-muted">{this.state.description_text}</h6>
                            <div className="game">
                                <div className="game-board">
                                    <Board />
                                </div>
                                <div className="game-info">
                                    <div>{/* status */}</div>
                                    <ol>{/* TODO */}</ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;