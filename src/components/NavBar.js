import { ActiveGoodIcon, SearchIcon } from '../assets'
import './NavBar.css'

function NavBar() {
  return (
    <div id="navbar-wrapper">
      <div id="navbar-btns-wrapper">
        <ActiveGoodIcon />
        <SearchIcon />
      </div>
    </div>
  )
}

export default NavBar
