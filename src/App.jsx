import Player from "./components/Player.jsx";

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Mistrz" symbol="X" />
          <Player name="Szefo" symbol="O" />
        </ol>

        GAME BOARD
      </div>

      LOG
    </main>
  )
}

export default App
