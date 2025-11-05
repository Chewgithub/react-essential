// import { useState } from "react";



function GameBoard({onSelectSquare, board}) {

  // const [gameBoard, setGameBoard] = useState(initalGameBoard);
  
  // function handleSelectSquare(rowIndex, colIndex) {

  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
      
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;

  //   });
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {/* when we use map in this way, the second argument is the index of the current element, this is Javascript syntax */}
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() =>{onSelectSquare(rowIndex, colIndex)}} disabled={playerSymbol !== null}>
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

export default GameBoard;
