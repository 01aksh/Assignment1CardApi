import React from 'react'
import './Navbar.css'
const Navbar = ({getAllUsers}) => {
  return (
    <div className='navbar'>
        <div className='brandname'>
            Assign2
        </div>
        <div>
            <button className='getButton' onClick={getAllUsers}>Get Users</button>
        </div>
    </div>
  )
}

export default Navbar