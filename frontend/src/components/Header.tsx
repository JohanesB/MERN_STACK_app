import React from 'react'
import {FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header style={{
        padding: "15px"
    }}>
        <div style={{display: 'inline'}}>
            <Link to='/table'>CRUD</Link>
        </div>
        <div style={{display: 'inline',
    float: 'right'}}>
            <Link to='/register'><FaUser/>Create User</Link>
        </div>
    </header>
  )
}

export default Header