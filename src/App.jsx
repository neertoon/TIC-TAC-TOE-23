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

function deriveGameboard(gameTurns) {
    let gameBoard = [...initialGameBoard.map(array => [...array])];

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function deriveWinner(gameBoard, players) {
    let winner = null;

    for (const combination of WINNING_COMBINATION) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = players[firstSquareSymbol];
        }
    }

    return winner;
}

function App() {
    const [players, setPlayers]= useState({
        'X': 'Gucio',
        'O': 'Szefo',
    });
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    const gameBoard = deriveGameboard(gameTurns);

    let winner = deriveWinner(gameBoard, players);

    const hasDraw = gameTurns.length == 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            let currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [{player: currentPlayer, square: {row: rowIndex, col: colIndex}}, ...prevTurns];

            return updatedTurns;
        });
    }

    console.log('przeladuj APP');

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerChange(symbol, newName) {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName
            }
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Mistrz" symbol="X" isActive={activePlayer === 'X'} onChange={handlePlayerChange}/>
                    <Player initialName="Szefo" symbol="O" isActive={activePlayer === 'O'} onChange={handlePlayerChange}/>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRestart}/>}
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
            </div>

            <Log turns={gameTurns}/>
        </main>
    )
}

export default App
