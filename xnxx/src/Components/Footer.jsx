import React, { useState } from 'react';

function Footer({ player, setPlayer }) {
    const [playerNew, setPlayerNew] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (playerNew.trim() === '') {
            setError('Please enter a player\'s name');
            return;
        }

        const addPlayer = {
            name: playerNew,
            point: 0,
        };
        setPlayer([...player, addPlayer]);
        setPlayerNew('');
        setError('');
    };

    return (
        <div className="footer">
            <input
                onChange={(e) => setPlayerNew(e.target.value)}
                value={playerNew}
                type="text"
                placeholder="Enter a player's name"
                className="input"
            />
            <button onClick={handleSubmit}>Add Player</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Footer;
