import {useState} from "react";

import Players from "./components/Players";
import GameBoard from "./components/GameBoard";
function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleSelectSquare() {

    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player" >
          <Players initialName="Player 1" symbol="X" isActive={currentPlayer==='X'? true:false}/>
          <Players initialName="Player 2" symbol="O" isActive={currentPlayer==='O'? true:false}/>
          
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={currentPlayer}/>
      </div>
    </main>
  );
}

export default App;
