import React, { useEffect, useRef, useState } from 'react'

const Userefpractice = () => {
    let [value, setValue] = useState(0)

    const count = useRef(0);


    useEffect(() => {
        count.current = count.current + 1
    })



    return (
        <div>
            <button onClick={() => { setValue(prev => prev - 1) }}>-1</button>
            <h1>{value}</h1>
            <button onClick={() => { setValue(prev => prev + 1) }}>+1</button>
            <p>How many time render {count.current}</p>
        </div>
    )
}

export default Userefpractice
// useRef is a react Hook that allow us to create mutable variables, which will not re-render the component.
// Subscribe