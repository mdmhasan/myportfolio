import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <header>
        <div className='menu-btn'>
          <div className='btn-line' />
          <div className='btn-line' />
          <div className='btn-line' />
        </div>

        <nav className='menu'>
          <div className='menu-branding'>
            <div className='portrait' />
          </div>
          <ul className='menu-nav'>
            <li className='nav-item current'>
            <Link to={'/'} className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/about'} className='nav-link'>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/project'} className='nav-link'>
                My Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/contact'} className='nav-link'>
                How To Reach Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}
