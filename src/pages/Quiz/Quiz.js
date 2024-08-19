import {
  CheckBlueIcon,
  CheckGrayIcon,
  LeftIcon,
  QuestionIcon,
  SendIcon,
} from '../../assets'
import './Quiz.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Quiz() {
  const [choice, setChoice] = useState(0)

  return (
    <div id="quiz-page-wrapper">
      <div id="quiz-content-wrapper">
        <div id="quiz-content-header">
          <Link to="/detail">
            <LeftIcon />{' '}
          </Link>
          <div>코딩 마스터즈</div>
          <QuestionIcon />
        </div>
        <div id="quiz-title">QUIZ</div>
        <div id="quiz-subscript">다음 중 자바스크립트의 특성이 아닌 것은?</div>

        <ChoiceElem type={choice == 1} onClick={() => setChoice(1)}>
          비동기 처리 가능
        </ChoiceElem>
        <ChoiceElem type={choice == 2} onClick={() => setChoice(2)}>
          함수형 프로그래밍 지원
        </ChoiceElem>
        <ChoiceElem type={choice == 3} onClick={() => setChoice(3)}>
          정적 타입 언어
        </ChoiceElem>
      </div>

      <Link id="quiz-send-btn" to="/enter">
        <SendIcon />
        <div>답변제출</div>
      </Link>
    </div>
  )
}

export default Quiz

function ChoiceElem({ children, type, onClick }) {
  return (
    <div className={`choice-elem ${type ? 'active' : ''}`} onClick={onClick}>
      <div>{children}</div>
      {type ? <CheckBlueIcon /> : <CheckGrayIcon />}
    </div>
  )
}
