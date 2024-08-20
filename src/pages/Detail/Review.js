import React, { useState, useEffect } from 'react'
import Modal from '../../components/Modal'

function Review({ club }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const type = 'review'

  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch(process.env.REACT_APP_URL + '/api/44/reviews', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.result)
        console.log(reviews)
      })
  }, [])

  return (
    <div className="detail-content-wrapper" id="detail-content-wrapper-last">
      <DetailElem title="별점">
        <div id="review-write-title">
          <div>⭐️ {club.starRating}</div>
          <div id="review-write-btn" onClick={() => setModalIsOpen(true)}>
            리뷰 작성
          </div>
          <Modal
            type={type}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
        </div>
      </DetailElem>
      {/* <DetailElem title="리뷰요약">
        <div>회비가 아깝지만 개발 배우기 좋은 군기 없는 좋은 동아리</div>
      </DetailElem> */}
      {/* <hr /> */}

      <div id="review-wrapper">
        {reviews.map((elem, idx) => (
          <ReviewElem key={idx} data={elem} />
        ))}
        {/* <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem /> */}
      </div>
    </div>
  )
}

export default Review

function DetailElem({ title, children }) {
  return (
    <div className={`detail-elem-wrapper`}>
      <div className="detail-elem-title">{title}</div>
      <div className="detail-elem-content">{children}</div>
    </div>
  )
}

function ReviewElem({ children, data }) {
  const round = Math.round(data.rating)
  const star = '⭐️'.repeat(round)

  return (
    <div className="review-elem-wrapper">
      <div>{star}</div>
      <div className="review-writer">{data.term}</div>
      <div>{data.contents}</div>
    </div>
  )
}

const data = [
  {
    star: '⭐️⭐️⭐️⭐️⭐️',
    writer: '23년 1학기 동아리원',
    review:
      '군기도 없이 아주 좋은 분위기라서 좋았어요!. 3학년 1학기에 늦게 들어왔는데도, 1학년 학우들도 살갑게 대해주고 전체적으로 좋은 분위기에서 동아리 생활을 할 수 있었습니다. 추천!',
  },
  {
    star: '⭐️⭐️⭐',
    writer: '22년 2학기 동아리원',
    review:
      '군기가 너무 많아요 ㅠㅠ 고인물이 많은 느낌이지만 그래도 개발 처음 배우는 사람에게는 추천합니다.',
  },
  {
    star: '⭐️⭐️⭐️⭐️',
    writer: '21년 1학기 동아리원',
    review: '회비가 아깝지만 개발 배우기 좋은 동아리',
  },
  {
    star: '⭐️⭐️⭐️',
    writer: '20년 2학기 동아리원',
    review:
      '좋은 분위기지만 개발에 대한 열정이 부족해요 가끔 팀원 잘못 만나면 힘들지만 이건 뭐 어느 동아리나 마찬가지겠죠',
  },
  {
    star: '⭐️⭐️⭐️⭐️⭐️',
    writer: '20년 1학기 동아리원',
    review: '좋은 분위기와 열정이 넘치는 동아리입니다! 알고리즘 스터디 강추',
  },
  {
    star: '⭐️⭐️⭐️⭐️',
    writer: '19년 2학기 동아리원',
    review: '좋은 분위기와 열정이 넘치는 동아리입니다',
  },
]
