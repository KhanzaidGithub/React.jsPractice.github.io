import React, { useState,useEffect } from 'react'

const Immer = () => {
    const [numbers, setNumbers] = useState([1, 2, 3]);

    // const addNumber = () => {
    //     numbers.push(4); // Directly mutating the state (this is bad)
    //     setNumbers(numbers); // React may not detect the change properly
    // };

    const addNumber = () => {
        const newNumbers = [...numbers, 4]; // Creating a new array (immutable)
        setNumbers(newNumbers); // React will properly detect this change
    };
    // useEffect(()=>{
    //     console.log(numbers);
        
    // },[numbers])

    return (
        <div>
            <button onClick={addNumber}>Add Number</button>
            <h2>{numbers.map((items,index)=><li key={index}>{items}</li>)}</h2>
        </div>
    )
}

export default Immer
