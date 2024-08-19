import { Link } from 'react-router-dom'
import { EnterIcon, LeftIcon } from '../../assets'
import './Detail.css'
import Review from './Review'
import Info from './Info'
import { useLocation } from 'react-router-dom'

function Detail() {
  const location = useLocation()
  const { club } = location.state || {} // state가 undefined일 수 있으니 기본값 설정

  return (
    <div id="detail-page-wrapper">
      <div id="detail-header">
        <Link to="/">
          <LeftIcon />
        </Link>
        <div>{club.name}</div>
        <Link to="/quiz">
          <EnterIcon />
        </Link>
      </div>
      <div className="detail-content-wrapper" id="detail-one-line">
        <div style={{ fontSize: '0.9em' }}>💡 {club.description}</div>
      </div>

      <Info club={club} />
      <Review club={club} />
    </div>
  )
}

export default Detail
