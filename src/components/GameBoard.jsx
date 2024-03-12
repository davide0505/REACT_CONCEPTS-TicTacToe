import React, { useState } from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const GameBoard = () => {
    // const [gameBoard, setGameBoard] = useState[initialGameBoard];
    // console.log(gameBoard)
    // return (
    //   <ol id="game-board">
    //     {initialGameBoard.map((row, rowIndex) => (
    //       <li key={rowIndex}>
    //         <ol>
    //           {row.map((playerSymbol, colIndex) => (
    //             <li key={colIndex}>
    //               <button>
    //                 {playerSymbol}
    //               </button>
    //             </li>
    //           ))}
    //         </ol>
    //       </li>
    //     ))}
    //   </ol>
    // );
    return (
      <ol id="game-board">
        {initialGameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
              <ol>
                {row.map((playerSymbol, colIndex) => (
                  <li key={colIndex}>
                    <button>
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