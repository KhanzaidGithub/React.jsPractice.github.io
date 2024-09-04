import { useState } from 'react';

function ObjTask() {
    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
    });

    function handlePlusClick() {
        setPlayer({
            ...player,
            score: player.score + 1
        })
    }

    function handleFirstNameChange(e) {
        setPlayer({
            ...player,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e) {
        setPlayer({
            ...player,
            lastName: e.target.value
        });
    }

    return (
        <div className='score'>
            <label>
                Score: <b>{player.score}</b>
                {' '}
                <button onClick={handlePlusClick}>
                    +1
                </button>
            </label>
            <label>
                First name:
                <input
                    value={player.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={player.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </div>
    );
}
export default ObjTask