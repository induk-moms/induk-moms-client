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
          <div>IGRUS</div>
          <QuestionIcon />
        </div>
        <div id="quiz-title">QUIZ</div>
        <div id="quiz-subscript">
          다음 중 자바스크립트에서 비동기 처리를 위한 방법이 아닌 것은
          무엇인가요?
        </div>

        <ChoiceElem type={choice == 1} onClick={() => setChoice(1)}>
          promise
        </ChoiceElem>
        <ChoiceElem type={choice == 2} onClick={() => setChoice(2)}>
          async/await
        </ChoiceElem>
        <ChoiceElem type={choice == 3} onClick={() => setChoice(3)}>
          XMLHttpRequest
        </ChoiceElem>
        <ChoiceElem type={choice == 4} onClick={() => setChoice(4)}>
          forEach
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
