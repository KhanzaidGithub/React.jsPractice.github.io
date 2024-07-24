import React from 'react'
import { Button } from 'antd'

function Event02({ message, children }) {
    return (
        <Button type="default" onClick={() => alert(message)}> {children} </Button>
    )
}

function Toolbar(){
    return(
        <div className='eventBtn-01'>
            <h2>Event-02.jsx</h2>
            <Event02 message="Testing">Test Btn</Event02>
        </div>
    )
}

export default Toolbar