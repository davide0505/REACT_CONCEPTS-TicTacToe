import React, { useState } from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const GameBoard = ({handleActivePlayer, activePlayer}) => {
  const [gameBoard, setGameboard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameboard((prevGameBoard) => {
       //faccio una copia
      const updatedGameBoard = [...prevGameBoard.map((innerArray) =>  [...innerArray])];
      updatedGameBoard[rowIndex][colIndex] = activePlayer;
      return updatedGameBoard; 
    });
    handleActivePlayer();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() =>handleSelectSquare(rowIndex, colIndex)}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard