import { useState } from 'react';
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);
  const [ activePlayer, setActivePlayer ] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
      setActivePlayer((currentlyActivePlayer) => currentlyActivePlayer === 'X' ? 'O' : 'X');
      setGameTurns(prevTurns => {
          let currentPlayer = 'X';

          if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
              currentPlayer = 'O';
          }

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

      LOG
    </main>
  )
}

export default App
