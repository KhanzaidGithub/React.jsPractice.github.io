import React from 'react'
import StateTest from '../component/StateTest'
import Todolist from '../component/Todolist'
import StateUsingObj from '../component/StateUsingObj'
import UseEffectState from '../component/UseEffectState'
import RespondingToEvent from '../component/AddignInteractivity/RespondingToEvent'

const Components = () => {
  return (
    <div>
      <h1>This is components page</h1>
      <StateTest />
      <Todolist />
      <StateUsingObj/>
      <UseEffectState/>
      <RespondingToEvent/>
    </div>
  )
}

export default Components
