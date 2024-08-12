import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <ul className='ul'>

                {/* <li><NavLink className={(item) => { return item.isActive ? "item" : "" }} to='/'>Home</NavLink></li>
                <li><NavLink className={(item) => { return item.isActive ? "item" : "" }} to='/about'>About</NavLink></li>
                <li><NavLink className={(item) => { return item.isActive ? "item" : "" }} to='/components'>Components</NavLink></li> */}

                <li><NavLink className="item" to='/'>Home</NavLink></li>
                <li><NavLink className="item" to='/about'>About</NavLink></li>
                <li><NavLink className="item" to='/components'>Components</NavLink></li>
                <li><NavLink className="item" to='/comptask'>CompTaks</NavLink></li>
                <li><NavLink className='item' to='/immer'>immer</NavLink></li>
                <li><NavLink className='item' to='/github'>Github</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
