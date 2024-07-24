import React, { useState } from 'react'

const StateUsingObj = () => {
    let [vehicle, setVehicle] = useState({
        bran: "Ford",
        model: 'Mustang',
        year: '1996',
        color: 'red'
    });
    return (
        <div>
            <div>
                <h1>My {vehicle.bran}</h1>
                <p>It's color is {vehicle.color} and model is {vehicle.model} from {vehicle.year} </p>
            </div>
        </div>
    )
}

export default StateUsingObj
