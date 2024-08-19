import Header from './Header'
import Top3 from './Top3'
import List from './List'
import './Main.css'
import { ActiveGoodIcon, ClickIcon, SearchIcon } from '../../assets'

function Main() {
  return (
    <>
      <div id="main-page-wrapper">
        <Header />
        <Top3 />
        <List />
      </div>
      <div id="navbar-wrapper">
        <div id="navbar-btns-wrapper">
          <ActiveGoodIcon />
          <SearchIcon />
        </div>
      </div>
    </>
  )
}

export default Main
