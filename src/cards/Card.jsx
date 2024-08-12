import { Button } from 'antd';
import React, { useState } from 'react'

const Card = () => {
    let [showfulldesc, setfulldesc] = useState(false);

    let description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veritatis velit dolorum et quam excepturi! Voluptates unde sit maxime laudantium accusamus dignissimos totam ratione adipisci? Deleniti a vel unde doloremque!'

    if (!showfulldesc) {
        description = description.substring(0, 50) + '...'
    }

    function show() {
        setfulldesc((prevState) => !prevState)
    }

    return (
        <div className='cards w-80'>
            <h1 className='text-center'>Title of Jobs</h1>
            <p className='text-center desc'>{description}</p>
            <Button onClick={show} className='text-indigo-500 hover:text-indigo-600 w-30 ms-22'>{showfulldesc ? 'Show' : 'Hide'}</Button>
        </div>
    )
}

export default Card
