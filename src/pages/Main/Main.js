import Header from './Header'
import Top3 from './Top3'
import List from './List'
import './Main.css'
import { NavBar } from '../../components'

function Main() {
  return (
    <>
      <div id="main-page-wrapper">
        <Header />
        <Top3 />
        <List />
      </div>
      <NavBar />
    </>
  )
}

export default Main
