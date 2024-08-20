import { Link } from 'react-router-dom'
import { EnterIcon, LeftIcon } from '../../assets'
import './Detail.css'
import Review from './Review'
import Info from './Info'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Detail() {
  const location = useLocation()
  const { club } = location.state || {} // state가 undefined일 수 있으니 기본값 설정
  const { clubId } = location.state || {} // state가 undefined일 수 있으니 기본값 설정
  const [clubElem, setClubElem] = useState(club)

  useEffect(() => {
    if (!club) {
      fetch(process.env.REACT_APP_URL + `/api/clubs/${clubId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setClubElem(data.result)
        })
    }
  }, [])

  console.log('detail', club)

  return (
    <>
      {clubElem ? (
        <>
          <div id="detail-page-wrapper">
            <div id="detail-header">
              <Link to="/">
                <LeftIcon />
              </Link>
              <div>{clubElem.name}</div>
              <Link to="/quiz" state={{ club: clubElem }}>
                <EnterIcon />
              </Link>
            </div>
            <div className="detail-content-wrapper" id="detail-one-line">
              <div style={{ fontSize: '0.9em' }}>💡 {clubElem.description}</div>
            </div>

            <Info club={clubElem} />
            <Review club={clubElem} />
          </div>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default Detail
