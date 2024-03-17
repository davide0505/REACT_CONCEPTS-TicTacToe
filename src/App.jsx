import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function App() {
  const [gameTurns, setGameTurns]  = useState([]);
  const [activePlayer, setActivePlayer] = useState('X')

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((curActivePlayer) => {
      const selectedPlayer = (curActivePlayer === 'X') ? 'O' : 'X';
      return selectedPlayer;
    });
    setGameTurns((currentGameTurns) => {
      let currentPlayer = 'X';
      if (currentGameTurns.length > 0 && currentGameTurns[0].player === 'X')  {
        currentPlayer = 'O';
      }
      const updatedGameTurns = [ {square:{row: rowIndex, col: colIndex}, player: currentPlayer },...currentGameTurns];
      return updatedGameTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName='Player 1' symbol='0' isActive={activePlayer === 'O'}/>
        </ol>
       <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
