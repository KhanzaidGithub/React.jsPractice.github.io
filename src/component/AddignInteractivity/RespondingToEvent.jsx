import React from 'react'
import { Button } from 'antd'
const RespondingToEvent = () => {
    let btnevent = () => {
        alert('Testing Event on Button')
    }

    return (
        <div>
            <Button type='primary' onClick={btnevent}>Responding-01</Button>
            <Button>Button-02</Button>
        </div>
    )
}

export default RespondingToEvent
