import React, { useState } from 'react'

const Counter = () => {
    let [counter, setCounter] = useState(10);
    let [color, setColor] = useState('blue')

    let addvalue = () => {
        if (counter == 20) {
            setCounter(counter = 20)
        }
        else {
            setCounter(counter + 1)
            if (counter == 20) {
                counter == 0;
            }
        }
    }
    let removevalue = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
        else {
            setCounter(counter = 0)
        }
    }

    function addcolor() {
        setColor(prevColor => prevColor === 'blue' ? 'red' : 'blue')
    }

    return (
        <div>
            <button onClick={addvalue}>Add Value</button>
            <p>{counter}</p>
            <button onClick={removevalue}>Remove Value </button>

            <p>My Fvt Color is {color}</p>
            <button onClick={addcolor}>Change</button>
        </div>
    )
}

export default Counter
