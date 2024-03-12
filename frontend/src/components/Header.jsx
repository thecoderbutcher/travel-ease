import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {navigation, logo} from './../constants/index.js'

function Header() {
  return (
    <header>
      <nav className='flex items-center justify-between'>
        
        <NavLink to='/' className='flex items-center gap-3'>
          <img src={logo} width='50' height='50' alt="logo" />
          <span className='text-xl text-secondary-dark'>T&T Agency</span>
        </NavLink>

        <div>
          <ul className='flex items-center gap-5'>
            {
              navigation.map((link, index) => (
                <li className='' key={index}>
                  <NavLink to={link.path}>
                    {link.display}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='flex items-center gap-3'>
            <button className='bg-white/700 rounded-md p-[4px] text-secondary'>
              <Link to='/login'>Login</Link>
            </button>
            <button className='bg-primary rounded-md p-1 text-white'>
              <Link to='/register'>Register</Link>
            </button>
        </div>
      </nav>
    </header>
  )
}

export default Header