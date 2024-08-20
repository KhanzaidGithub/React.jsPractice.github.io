import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    let [count, setCount] = useState(0);
    // here i am learning useEffect in react.js how does it works
    // useEffect use to add side effect in the application Such as Fetching api, directly updating Dom and Timers
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 2000);
    },[])
    // this setTimeout function has to run just one time but it is continuously  This is becz we have'nt added dependecy useEffect also required dependency but it is optional
    return (
        <div>
            <p>I have rendered {count} Time</p>
        </div>
    )
}

export default Useeffect
