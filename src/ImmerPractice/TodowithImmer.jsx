import React, { useState } from 'react';
import { produce } from 'immer';

const TodowithImmer = () => {
    const [todo, setTodo] = useState([]);
    const [inputValue, setinputValue] = useState('');  // Initialize with an empty string

    function addtodofun() {
        if (inputValue.trim()) {
            setTodo(produce(draft => {
                draft.push(inputValue);
            }));
        }
        else{
            alert('Write to add')
        }
        setinputValue(''); // Clear input after adding
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
            <button onClick={addtodofun}>Add Todo</button>

            {/* To Render Data */}
            <ul>
                {todo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodowithImmer;
