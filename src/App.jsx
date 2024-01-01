import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Mistrz" symbol="X" />
          <Player initialName="Szefo" symbol="O" />
        </ol>

        <GameBoard />
      </div>

      LOG
    </main>
  )
}

export default App
