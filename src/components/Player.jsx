import { useState } from 'react';
export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    let nameField = isEditing
        ? <input type="text" name="name" value={name} required />
        : <span className="player-name">{name}</span>;

    return (
        <li>
            <span className="player">
              {nameField}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}