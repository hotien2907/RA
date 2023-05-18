import React, { useState, useEffect } from 'react';

function Heading({ player }) {
    const totalPoints = player.reduce((total, player) => total + player.point, 0);
    const [stopwatch, setStopwatch] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setStopwatch((prevStopwatch) => prevStopwatch + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };
    const handleReset = () => {
        setStopwatch(0);
        setIsRunning(false);

    };

    return (
        <div className="heading">
            <div className="heading-left">
                <div className="heading-1">
                    Players: <b id="number-h1">{player.length}</b>
                </div>
                <div className="heading-2">
                    Total Point: <b id="number-h2">{totalPoints}</b>
                </div>
            </div>
            <div className="heading-center">
                <h2>Rikkei Scoreboard</h2>
            </div>
            <div className="heading-right">
                <p>Stop Watch</p>
                <p id="number-stopwatch">{stopwatch}</p>
                <button id="btn-1" onClick={handleStart}>
                    START
                </button>
                <button id="btn-2" onClick={handleReset}>
                    RESET
                </button>
            </div>
        </div>
    );
}

export default Heading;
