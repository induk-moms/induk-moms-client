import Header from './Header'
import Top3 from './Top3'
import List from './List'
import './Main.css'
import { NavBar } from '../../components'

function Main({ clubList }) {
  return (
    <>
      <div id="main-page-wrapper">
        <Header />
        <Top3 />
        <List clubLis={clubList} />
      </div>
      <NavBar />
    </>
  )
}

export default Main
