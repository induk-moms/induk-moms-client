function Info() {
  return (
    <div className="detail-content-wrapper">
      <DetailElem title="동아리 소속">인하대학교</DetailElem>
      <DetailElem title="유형">
        <div id="detail-tag-wrapper">
          <DetailTag>개발</DetailTag>
          <DetailTag>해커톤</DetailTag>
          <DetailTag>인하대</DetailTag>
        </div>
      </DetailElem>
      <DetailElem title="인원수">150명</DetailElem>
      <DetailElem title="소개" className="description-width">
        코딩에 관심 있는 학생들을 위한 동아리로, 다양한 프로그래밍 언어와
        알고리즘 문제를 다룹니다.
      </DetailElem>
    </div>
  )
}

export default Info

function DetailElem({ title, children, className }) {
  return (
    <div className={`detail-elem-wrapper ${className ? className : ''}`}>
      <div className="detail-elem-title">{title}</div>
      <div className="detail-elem-content">{children}</div>
    </div>
  )
}

function DetailTag({ children }) {
  return <div className="detail-tag-elem-wrapper"># {children}</div>
}
