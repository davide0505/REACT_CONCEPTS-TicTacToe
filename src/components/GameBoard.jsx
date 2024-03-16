import React, { useState } from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const GameBoard = () => {
  const [gameBoard, setGameboard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameboard((prevGameBoard) => {
       //faccio una copia
      const updatedGameBoard = [...prevGameBoard.map[(innerArray) =>  [...innerArray]]];

        // la modifico e setto il valore
    })
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() =>handleSelectSquare()}>
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