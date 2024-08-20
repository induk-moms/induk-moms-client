import {
  CheckBlueIcon,
  CheckGrayIcon,
  LeftIcon,
  QuestionIcon,
  SendIcon,
} from '../../assets'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Enter.css'
import { useLocation } from 'react-router-dom'

function Enter() {
  const [choice, setChoice] = useState(0)

  const location = useLocation()
  const { club } = location.state || {} // state가 undefined일 수 있으니 기본값 설정

  return (
    <div id="quiz-page-wrapper" style={{ background: '#fff' }}>
      <div id="quiz-content-wrapper">
        <div id="quiz-content-header">
          <Link to="/detail" state={{ club: club }}>
            <LeftIcon />{' '}
          </Link>
          <div>코딩 마스터즈</div>
          <QuestionIcon />
        </div>

        <div id="enter-one-line">💡 코딩으로 성장하자</div>

        <div className="enter-question">✔️ 지원 동기를 작성해주세요</div>
        <textarea
          className="enter-answer"
          placeholder="동아리 지원 동기를 작성해주세요"
          style={{ width: '100%', height: '100px' }}
        ></textarea>

        <div className="enter-question">
          ✔️ 동아리에서 무엇을 얻고 싶은지 작성해주세요
        </div>
        <textarea
          className="enter-answer"
          placeholder="동아리에서 얻고 싶은 것을 작성해주세요"
          style={{ width: '100%', height: '100px' }}
        ></textarea>
      </div>

      <Link id="quiz-send-btn" to="/detail" state={{ club: club }}>
        <SendIcon />
        <div>동아리 신청</div>
      </Link>
    </div>
  )
}

export default Enter
