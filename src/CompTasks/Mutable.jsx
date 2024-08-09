import React, { useState } from 'react';
import produce from 'immer';

const ImmerExample = () => {
    const [numbers, setNumbers] = useState([1, 2, 3]);

    const addNumber = () => {
        setNumbers(produce(draft => {
            draft.push(4); // Mutate the draft state
        }));
    };

    return (
        <div>
            <button onClick={addNumber}>Add Number</button>
            <ul>
                {numbers.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ImmerExample;
