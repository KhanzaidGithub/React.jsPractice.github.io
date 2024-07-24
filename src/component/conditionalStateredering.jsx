import React from 'react'
import { useState } from 'react'

const CondStateRendering = () => {

    const [isCar, setCar] = useState(true);

    let toggleFunction = () => setCar(!isCar);

    return (
        <div>
            <h1>{isCar ? 'My Car' : 'My Bike'}</h1>
            {isCar ? (
                <div>
                    <p>It's White color and new model</p>
                </div>
            ) : (
                <div>
                    <p>It's Black Color Old Model</p>
                </div>
            )}
            <button onClick={toggleFunction}>Toggle Vehicle</button>
        </div>
    )
}

export default CondStateRendering
