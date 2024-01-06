import { useState } from 'react';
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [ activePlayer, setActivePlayer ] = useState('X');

  function handleSelectSquare() {
      setActivePlayer((currentlyActivePlayer) => currentlyActivePlayer === 'X' ? 'O' : 'X');
  }

  console.log('przeladuj APP');

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Mistrz" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Szefo" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>

      LOG
    </main>
  )
}

export default App
