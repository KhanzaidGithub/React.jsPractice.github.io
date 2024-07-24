import React from 'react'
import './btnsmall.css'



const Btnsmall = (props) => {
  return (
    <div>
      <button className='btnsmall'>{props.name}</button>
    </div>
  )
}

export default Btnsmall
