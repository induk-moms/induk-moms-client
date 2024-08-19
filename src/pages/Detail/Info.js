function Info({ club }) {
  // pasring : #a #b #c -> ['a', 'b', 'c']
  const tags = club.hashtags.split(' ').map((tag) => tag.slice(1))

  return (
    <div className="detail-content-wrapper">
      <DetailElem title="동아리 소속">인하대학교</DetailElem>
      <DetailElem title="유형">
        <div id="detail-tag-wrapper">
          {/* <DetailTag>개발</DetailTag>
          <DetailTag>해커톤</DetailTag>
          <DetailTag>인하대</DetailTag> */}
          {tags.map((tag) => (
            <DetailTag key={tag}>{tag}</DetailTag>
          ))}
        </div>
      </DetailElem>
      <DetailElem title="인원수">{club.ratingCount}명</DetailElem>
      <DetailElem title="소개" className="description-width">
        {club.description}
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
