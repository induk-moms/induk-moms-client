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

function Enter() {
  const [choice, setChoice] = useState(0)

  return (
    <div id="quiz-page-wrapper" style={{ background: '#fff' }}>
      <div id="quiz-content-wrapper">
        <div id="quiz-content-header">
          <Link to="/detail">
            <LeftIcon />{' '}
          </Link>
          <div>IGRUS</div>
          <QuestionIcon />
        </div>

        <div id="enter-one-line">
          💡 인하대 교내 최대 규모 개발 동아리입니다
        </div>

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

      <Link id="quiz-send-btn" to="/detail">
        <SendIcon />
        <div>동아리 신청</div>
      </Link>
    </div>
  )
}

export default Enter
