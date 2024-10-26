import { useState } from 'react';
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from './winning-combination.js';

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }

    return currentPlayer;
}

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
      setGameTurns(prevTurns => {
          let currentPlayer = deriveActivePlayer(prevTurns);

          const updatedTurns = [{ player: currentPlayer, square: {row: rowIndex, col: colIndex } }, ...prevTurns];

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

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>

        <Log turns={gameTurns} />
    </main>
  )
}

export default App
