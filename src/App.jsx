import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  const handleActivePlayer = () => {
    setActivePlayer((curActivePlayer) => {
      const selectedPlayer = (curActivePlayer === 'X') ? 'O' : 'X';
      console.log(selectedPlayer);
      return selectedPlayer;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName='Player 1' symbol='0' isActive={activePlayer === 'O'}/>
        </ol>
       <GameBoard handleActivePlayer={handleActivePlayer} activePlayer={activePlayer}/>
      </div>
      LOG
    </main>
  )
}

export default App
