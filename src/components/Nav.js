import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <React.Fragment>
      <nav>
        <ul className='menu'>

          <li><NavLink to='home'>Home</NavLink></li>
          <li><NavLink to='about'>About</NavLink></li>
          <li><NavLink to='specials'>Specials</NavLink></li>
          <li><NavLink to='bookings'>Book</NavLink></li>
          <li><NavLink to='order-online'>Order Online</NavLink></li>
          <li><NavLink to='login'>Login</NavLink></li>
        </ul>
      </nav>

    </React.Fragment>
  )
}

export default Nav