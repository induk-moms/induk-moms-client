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
        <div>코딩 마스터즈</div>
        <Link to="/quiz">
          <EnterIcon />
        </Link>
      </div>
      <div className="detail-content-wrapper" id="detail-one-line">
        <div style={{ fontSize: '0.9em' }}>
          💡 코딩 실력 향상에 최고지만 정치적 분위기가 아쉬운 동아리
        </div>
      </div>

      <Info />
      <Review />
    </div>
  )
}

export default Detail
