import { Link } from 'react-router-dom'
import { EnterIcon, LeftIcon } from '../../assets'
import './Detail.css'
import Review from './Review'
import Info from './Info'

function Detail() {
  return (
    <div id="detail-page-wrapper">
      <div id="detail-header">
        <Link to="/">
          <LeftIcon />
        </Link>
        <div>IGRUS</div>
        <Link to="/quiz">
          <EnterIcon />
        </Link>
      </div>
      <div className="detail-content-wrapper" id="detail-one-line">
        💡 인하대 교내 최대 규모 개발 동아리입니다
      </div>

      <Info />
      <Review />
    </div>
  )
}

export default Detail
