import React, { useState } from 'react'
import {
  ActiveGoodIcon,
  ActiveSearchIcon,
  GoodIcon,
  SearchIcon,
} from '../assets'
import './NavBar.css'

function NavBar() {
  const [active, setActive] = useState(1)

  return (
    <div id="navbar-wrapper">
      <div id="navbar-btns-wrapper">
        {active === 1 ? (
          <>
            <ActiveGoodIcon />
            <SearchIcon onClick={() => setActive(2)} />
          </>
        ) : (
          <>
            <GoodIcon onClick={() => setActive(1)} />
            <ActiveSearchIcon />
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar
