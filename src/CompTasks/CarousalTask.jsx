import React, { useState } from 'react'
import { sculptureList } from './CarousalData'
const CarousalTask = () => {

    let [index, setIndex] = useState(0);

    let sculpture = sculptureList[index];

    function btnclick() {
        setIndex(index + 1);
    }



    return (
        <div>
            <button onClick={btnclick}>Next</button>
            <h2>{sculpture.name} by {sculpture.artist}</h2>
            <h3>({index + 1} of {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>{sculpture.description}</p>
        </div>
    )
}

export default CarousalTask
