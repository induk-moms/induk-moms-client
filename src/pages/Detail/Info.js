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
      <DetailElem title="인원수">50명</DetailElem>
      <DetailElem title="소개">
        해킹, 웹/앱 개발, 협업 경험을 얻을 수 있는 매우 좋은 동이리입니다
      </DetailElem>
    </div>
  )
}

export default Info

function DetailElem({ title, children }) {
  return (
    <div className={`detail-elem-wrapper`}>
      <div className="detail-elem-title">{title}</div>
      <div className="detail-elem-content">{children}</div>
    </div>
  )
}

function DetailTag({ children }) {
  return <div className="detail-tag-elem-wrapper"># {children}</div>
}
