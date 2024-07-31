import { Flex } from 'antd'
import React, { useState } from 'react'

const Todolist = () => {
    let [todo, setTodos] = useState([])
    let [inputValue, setInputValue] = useState('')

    // BtnCliCk event
    function btnfunc() {
        // if (inputValue.trim()) {
        //     setTodos([...todo, inputValue])
        // }
        let data = [...todo]
        data.push(inputValue);
        setTodos(data)
        setInputValue('')
    }
    // Input Value
    function inputfunc(e) {
        setInputValue(e.target.value);
    }


    return (
        <div>
            <div style={{ display: "Flex", width: "400px", margin: 'auto', marginTop: '50px', marginBottom: '50px', gap: "20px", }}>
                <input type="text" placeholder='Add Todo' value={inputValue}
                    onChange={(e) => inputfunc(e)} />

                <button onClick={btnfunc}>Add ToDo</button>
            </div>
            <div className='tododispaly' style={{ display: "Flex", width: "400px", margin: 'auto', marginTop: '50px', marginBottom: '50px', gap: "20px", flexWrap: 'wrap' }}>
                <ul>
                    {todo.map((items, index) => <li key={index}>{items}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Todolist
