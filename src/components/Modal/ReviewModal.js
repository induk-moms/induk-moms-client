import React, { useState } from 'react'

function ReviewModal({ club }) {
  const [starRating, setRating] = useState(0)
  const [reviewText, setReview] = useState('')

  const handleReviewSubmit = () => {
    const review = {
      starRating,
      reviewText,
    }

    fetch(process.env.REACT_APP_URL + `/api/v1/review/add/${club.clubId}/1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <div>
      <div>review</div>
      <div>
        <input
          type="text"
          placeholder="별점"
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="text"
          placeholder="리뷰 내용"
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <div onClick={handleReviewSubmit}>제출</div>
    </div>
  )
}

export default ReviewModal
