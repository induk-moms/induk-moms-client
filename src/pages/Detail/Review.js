function Review() {
  return (
    <div className="detail-content-wrapper" id="detail-content-wrapper-last">
      <DetailElem title="별점">
        <div id="review-write-title">
          <div>⭐️ 4.8</div>
          <div id="review-write-btn">리뷰 작성</div>
        </div>
      </DetailElem>
      <DetailElem title="리뷰요약">
        <div>회비가 아깝지만 개발 배우기 좋은 군기 없는 좋은 동아리</div>
      </DetailElem>
      {/* <hr /> */}

      <div id="review-wrapper">
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
        <ReviewElem />
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

function ReviewElem({ children }) {
  return (
    <div className="review-elem-wrapper">
      <div>⭐️⭐️⭐️⭐️⭐️</div>
      <div className="review-writer">23년 1학기 동아리원</div>
      <div>군기도 없이 아주 좋은 분위기입니다</div>
    </div>
  )
}
