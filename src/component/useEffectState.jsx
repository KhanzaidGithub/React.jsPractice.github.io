import React, { useState, useEffect } from 'react';

const StateTest = () => {
    const [color, setColor] = useState('red');

    useEffect(() => {
        console.log(`Color changed to ${color}`);
    }, [color]);

    return (
        <div>
            <h1>My Car</h1>
            <p>It's color is {color}</p>
            <input type="text" value={color} onChange={(e) => setColor(e.targetvalue)} placeholder="Color"/>
        </div>
    );
};

export default StateTest;
