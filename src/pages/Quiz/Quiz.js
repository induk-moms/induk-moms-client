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
import { useLocation } from 'react-router-dom'

function Quiz() {
  const location = useLocation()
  const { club } = location.state || {} // state가 undefined일 수 있으니 기본값 설정

  // "다음 중 로봇의 주요 부품이 아닌 것은?\n1) 센서\n2) 모터\n3) 마이크로파"
  // 질문과 객관식 파싱
  const problem = club.problem.split('\n')
  const question = problem[0]
  const choices = problem.slice(1)
  const answer = club.answer

  console.log(club)

  const [choice, setChoice] = useState(0)
  const [linkTo, setLinkTo] = useState('/detail')

  return (
    <div id="quiz-page-wrapper">
      <div id="quiz-content-wrapper">
        <div id="quiz-content-header">
          <Link to="/detail" state={{ club: club }}>
            <LeftIcon />{' '}
          </Link>
          <div>{club.name}</div>
          <QuestionIcon />
        </div>
        <div id="quiz-title">QUIZ</div>
        <div id="quiz-subscript">{question}</div>

        {choices.map((elem, idx) => (
          <ChoiceElem
            key={idx}
            type={choice == idx + 1}
            onClick={() => {
              setChoice(idx + 1)
              setLinkTo(idx + 1 == answer ? '/enter' : '/detail')
            }}
          >
            {elem}
          </ChoiceElem>
        ))}
      </div>

      <Link id="quiz-send-btn" to={linkTo} state={{ club: club }}>
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
