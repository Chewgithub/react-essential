import { useState } from "react";

function Players({ initialName, symbol , isActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEdit() {
    // If you wants to toggle the editing state, you should use the arrow function syntax: () => !editing
    setIsEditing((editing) => !editing);
  }
  

function handleChange(event) {
  setPlayerName(event.target.value);
}

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonText = isEditing ? "Save" : "Edit";

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{buttonText}</button>
    </li>
  );
}

export default Players;
