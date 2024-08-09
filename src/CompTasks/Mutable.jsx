import React, { useState } from 'react';
import { produce } from "immer"


const Mutable = () => {
  
    const [numbers, setNumbers] = useState([1, 2, 3]);

    const addNumber = () => {
        setNumbers(produce(draft => {
            draft.push(draft.length + 1); // Mutate the draft state
        }));
    };

    // let's build logic



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

export default Mutable;
