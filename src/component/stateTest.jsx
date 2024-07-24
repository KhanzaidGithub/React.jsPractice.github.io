import React, { useState } from 'react'

const StateTest = () => {
    let [brand, setBrand] = useState('Ford');
    let [model, setModel] = useState('Mustang');
    let [year, setYear] = useState('1996');
    let [color, setColor] = useState('red');

    // set funtion user input to change color name model

    let brandchange = (e) => setBrand(e.target.value);
    let modelchange = (e) => setModel(e.target.value);
    let yearchange = (e) => setYear(e.target.value);
    let colorchange = (e) => setColor(e.target.value);

    return (
        <div className='state'>
            <h1>My {brand}</h1>
            <p className='p'>It's color is <span className='span'>{color}</span> and Model is <span className='span'>{model}</span> from <span className='span'>{year}</span> </p>

            <div className='input'>
                <input type="text" value={brand} onChange={brandchange} placeholder='Brand' />
                <input type="text" value={model} onChange={modelchange} placeholder='Model' />
                <input type="text" value={year} onChange={yearchange} placeholder='Year' />
                <input type="text" value={color} onChange={colorchange} placeholder='Color' />
            </div>
            </div>
    )
}

export default StateTest
