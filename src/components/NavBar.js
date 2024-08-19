import React, { useState } from 'react'
import {
  ActiveGoodIcon,
  ActiveSearchIcon,
  GoodIcon,
  SearchIcon,
} from '../assets'
import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'

function NavBar() {
  const location = useLocation()
  const [active, setActive] = useState(location.pathname === '/search' ? 2 : 1)

  return (
    <div id="navbar-wrapper">
      <div id="navbar-btns-wrapper">
        {active === 1 ? (
          <>
            <ActiveGoodIcon />
            <Link to="/search">
              <SearchIcon onClick={() => setActive(2)} />
            </Link>
          </>
        ) : (
          <>
            <Link to="/">
              <GoodIcon onClick={() => setActive(1)} />
            </Link>
            <ActiveSearchIcon />
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar
