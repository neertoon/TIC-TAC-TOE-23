import { useState } from 'react';
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATION } from './winning-combination.js';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }

    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = initialGameBoard;

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

    let winner = null;

    for (const combination of WINNING_COMBINATION) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol;
        }
    }

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            let currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [{player: currentPlayer, square: {row: rowIndex, col: colIndex}}, ...prevTurns];

            return updatedTurns;
        });
    }

    console.log('przeladuj APP');

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Mistrz" symbol="X" isActive={activePlayer === 'X'}/>
                    <Player initialName="Szefo" symbol="O" isActive={activePlayer === 'O'}/>
                </ol>
                {winner && <GameOver winner={winner} />}
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
            </div>

            <Log turns={gameTurns}/>
        </main>
    )
}

export default App
