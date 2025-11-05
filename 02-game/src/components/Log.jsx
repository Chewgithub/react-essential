

function Log({turns}){
return <ol id="log">
  {turns.map((turn, index) => {
    const {player, square} = turn;
    const {row, col} = square;
    return <li key={index}>Player {player} selected row {row + 1}, col {col + 1}</li>
  })}
</ol>


}




export default Log;