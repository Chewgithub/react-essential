import {useState} from "react";

import Players from "./components/Players";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS} from "./winning-combinations"; 

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveCurrentPlayer(turns){
      let currentPlayer = 'X'
      if (turns.length > 0 && turns[0].player === 'X'){
        currentPlayer = 'O'
      }
      return currentPlayer;
}
function App() {

  // Very import to create a copy of the initalGameBoard to avoid mutating it
  let gameBoard = [...initalGameBoard.map((array) => [...array])];
  let winner = null;

  const [gameTurns, setGameTurns] = useState([]);
  const [currentPlayerName, setCurrentPlayerName] = useState({X: "Player 1", O: "Player 2"});

  const currentPlayer = deriveCurrentPlayer (gameTurns);

    gameTurns.forEach((turn) => {
    const {row, col} = turn.square;
    gameBoard[row][col] = turn.player;
  });


  for (let combination of WINNING_COMBINATIONS){
    const[first, second, third] = combination;

    const firstSymbol = gameBoard[first.row][first.column];
    const secondSymbol = gameBoard[second.row][second.column];
    const thirdSymbol = gameBoard[third.row][third.column];
    
    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol){
      winner = currentPlayerName[firstSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;
  

  function handleSelectSquare(rowIndex, colIndex) {
    
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveCurrentPlayer (prevTurns);
      const updatedTurns = [{ player: currentPlayer, square: { row: rowIndex, col: colIndex } }, ...prevTurns];
      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns(() => {
      return [];
    });
    
    console.log("Rematch started!");
  }
  function handlePlayerName(symbol, name) {
    setCurrentPlayerName(prevPlayerName => {
      return {
        ...prevPlayerName,
        // this syntax in square brackets allows us to use a variable as the key name
        [symbol]: name
      }
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player" >
          <Players initialName="Player 1" symbol="X" isActive={currentPlayer==='X'? true:false} onNameChange={handlePlayerName}/>
          <Players initialName="Player 2" symbol="O" isActive={currentPlayer==='O'? true:false} onNameChange={handlePlayerName}/>
          
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch}  />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
