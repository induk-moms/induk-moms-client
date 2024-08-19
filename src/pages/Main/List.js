import './List.css'
import { ClickIcon } from '../../assets'
import { Link } from 'react-router-dom'

function List() {
  return (
    <div id="main-list-wrapper">
      <ListElem />
      <ListElem />
      <ListElem />
      <ListElem />
      <ListElem />
      <ListElem />
    </div>
  )
}

export default List

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
      <Link className="listelem-btn " to="/detail">
        <ClickIcon />
      </Link>
    </div>
  )
}

function ListTag({ tag }) {
  return <div className="list-tag-wrapper"># {tag}</div>
}
