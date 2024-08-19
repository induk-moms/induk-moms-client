import Header from './Header'
import Top3 from './Top3'
import './Main.css'
import { ClickIcon } from '../../assets'

function Main() {
  return (
    <div id="main-page-wrapper">
      <Header />
      <Top3 />
      <div id="main-list-wrapper">
        <ListElem />
        <ListElem />
        <ListElem />
        <ListElem />
        <ListElem />
        <ListElem />
      </div>
    </div>
  )
}

export default Main

function ListElem() {
  return (
    <div className="listelem-wrapper">
      <div className="listelem-rank">4</div>
      <div className="listelem-info">
        <div className="listelem-info-wrapper">
          <div className="listelem-info-title">CTP</div>
          <div>⭐️ 4.8</div>
          <div>⭐️ 50</div>
        </div>
        <div className="listelem-tag-wrapper">
          <ListTag tag="개발" />
          <ListTag tag="해커톤" />
          <ListTag tag="인하대" />
        </div>
      </div>
      <ClickIcon className="listelem-btn " />
    </div>
  )
}

function ListTag({ tag }) {
  return <div className="list-tag-wrapper"># {tag}</div>
}
