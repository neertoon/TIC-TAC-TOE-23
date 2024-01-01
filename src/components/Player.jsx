import { useState } from 'react';
export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function changeName(event) {
        setIsEditing(editing => !editing)
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let nameField = isEditing
        ? <input type="text" name="name" value={playerName} onChange={handleChange} required />
        : <span className="player-name">{playerName}</span>;

    return (
        <li>
            <span className="player">
              {nameField}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={changeName}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}