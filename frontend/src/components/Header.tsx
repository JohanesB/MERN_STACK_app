import React from 'react'
import {FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header>
        <div>
            <Link to='/'>CRUD</Link>
        </div>
        <div>
            <Link to='/register'><FaUser/>Create User</Link>
        </div>
    </header>
  )
}

export default Header