import './List.css'
import { ClickIcon } from '../../assets'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function List() {
  // get api : clubs
  const [clubList, setClubList] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_URL + '/api/clubs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setClubList(data.result)
        console.log(clubList)
      })
  }, [])

  console.log(clubList)
  return (
    <div id="main-list-wrapper">
      {/* {clubList.map((idx, club) => (
        <ListElem clubList={club} idx={idx} />
      ))} */}
      {clubList.map((club, idx) => (
        <ListElem clubList={club} idx={idx + 1} />
      ))}
    </div>
  )
}

export default List

function ListElem({ clubList, idx }) {
  const tags = clubList.hashtags.split(' ').map((tag) => tag.slice(1))

  return (
    <div className="listelem-wrapper">
      <div className="listelem-rank">{idx + 3}</div>
      <div className="listelem-info">
        <div className="listelem-info-wrapper">
          <div className="listelem-info-title">{clubList.name}</div>
          <div>⭐️ {clubList.starRating}&nbsp;&nbsp;&nbsp;</div>
          <div>🙆 {clubList.ratingCount}</div>
        </div>
        <div className="listelem-tag-wrapper">
          {/* <ListTag tag="개발" />
          <ListTag tag="해커톤" />
          <ListTag tag="인하대" /> */}
          {tags.map((tag) => (
            <ListTag tag={tag} />
          ))}
          {/* <div>{clubList.hashtags}</div> */}
        </div>
      </div>
      <Link className="listelem-btn " to="/detail" state={{ club: clubList }}>
        <ClickIcon />
      </Link>
    </div>
  )
}

function ListTag({ tag }) {
  return <div className="list-tag-wrapper"># {tag}</div>
}

const clubList = [
  {
    name: '코딩 마스터즈',
    description:
      '코딩에 관심 있는 학생들을 위한 동아리로, 다양한 프로그래밍 언어와 알고리즘 문제를 다룹니다.',
    simpleDescription: '코딩으로 성장하자',
    starRating: 4.8,
    ratingCount: 150,
    userId: 1,
    problem:
      '다음 중 자바스크립트의 특성이 아닌 것은?\n1) 비동기 처리 가능\n2) 함수형 프로그래밍 지원\n3) 정적 타입 언어',
    answer: 3,
    hashtags: ['코딩', '프로그래밍', '알고리즘'],
  },
  {
    name: '글로벌 리더스',
    description:
      '국제 관계와 리더십에 관심 있는 학생들이 모여 다양한 활동을 펼치는 동아리입니다.',
    simpleDescription: '세계를 이끄는 리더가 되자',
    starRating: 4.5,
    ratingCount: 120,
    userId: 2,
    problem:
      '다음 중 유엔의 공식 언어가 아닌 것은?\n1) 영어\n2) 스페인어\n3) 독일어',
    answer: 3,
    hashtags: ['리더십', '국제관계', '유엔'],
  },
  {
    name: '비인사이트',
    description:
      '비즈니스와 경제에 대한 깊은 이해를 바탕으로 실무 경험을 쌓는 동아리입니다.',
    simpleDescription: '비즈니스 세계로 한 걸음',
    starRating: 4.6,
    ratingCount: 90,
    userId: 3,
    problem:
      '다음 중 시장 독점의 특징이 아닌 것은?\n1) 높은 진입 장벽\n2) 가격 결정의 자유\n3) 다수의 경쟁자 존재',
    answer: 3,
    hashtags: ['비즈니스', '경제', '마케팅'],
  },
  {
    name: '사진 예술가들',
    description:
      '사진 촬영과 편집에 관심 있는 학생들이 모여 작품을 공유하고 스킬을 향상시키는 동아리입니다.',
    simpleDescription: '순간을 담다',
    starRating: 4.7,
    ratingCount: 85,
    userId: 4,
    problem:
      '다음 중 노출에 영향을 미치는 요소가 아닌 것은?\n1) 셔터 속도\n2) ISO 감도\n3) 초점 거리',
    answer: 3,
    hashtags: ['사진', '예술', '촬영'],
  },
  {
    name: '음악과 함께',
    description:
      '다양한 악기 연주와 음악 감상을 즐기는 학생들을 위한 동아리입니다.',
    simpleDescription: '음악으로 소통하자',
    starRating: 4.9,
    ratingCount: 200,
    userId: 5,
    problem:
      '다음 중 클래식 음악의 특징이 아닌 것은?\n1) 관현악 연주\n2) 즉흥 연주\n3) 서양 고전 음악',
    answer: 2,
    hashtags: ['음악', '연주', '클래식'],
  },
  {
    name: '게임 연구회',
    description:
      '게임 개발에 관심 있는 학생들이 모여 프로젝트를 진행하고 지식을 공유하는 동아리입니다.',
    simpleDescription: '나만의 게임을 만들자',
    starRating: 4.8,
    ratingCount: 140,
    userId: 6,
    problem:
      '다음 중 게임 개발에 사용되지 않는 엔진은?\n1) Unity\n2) Unreal\n3) Blender',
    answer: 3,
    hashtags: ['게임개발', '프로젝트', 'Unity'],
  },
  {
    name: '영화 동호회',
    description:
      '다양한 장르의 영화를 감상하고 리뷰를 나누는 영화 애호가들을 위한 동아리입니다.',
    simpleDescription: '영화 속으로',
    starRating: 4.7,
    ratingCount: 100,
    userId: 7,
    problem:
      '다음 중 영화 제작의 단계가 아닌 것은?\n1) 프리프로덕션\n2) 포스트프로덕션\n3) 리허설',
    answer: 3,
    hashtags: ['영화', '리뷰', '감상'],
  },
  {
    name: '스포츠 매니아',
    description:
      '다양한 스포츠 활동을 즐기고 체력을 키우는 것을 목표로 하는 동아리입니다.',
    simpleDescription: '운동으로 건강하게',
    starRating: 4.6,
    ratingCount: 110,
    userId: 8,
    problem:
      '다음 중 축구 경기에서 발생할 수 없는 상황은?\n1) 오프사이드\n2) 3점슛\n3) 페널티 킥',
    answer: 2,
    hashtags: ['스포츠', '운동', '축구'],
  },
  {
    name: '책과 나',
    description:
      '문학과 독서를 사랑하는 학생들이 모여 책을 읽고 토론하는 동아리입니다.',
    simpleDescription: '책 속에서 찾는 행복',
    starRating: 4.8,
    ratingCount: 130,
    userId: 9,
    problem: '다음 중 소설의 요소가 아닌 것은?\n1) 플롯\n2) 주제\n3) 화자',
    answer: 3,
    hashtags: ['문학', '독서', '토론'],
  },
  {
    name: '사회 봉사단',
    description: '지역 사회에 기여하고 봉사 활동을 실천하는 동아리입니다.',
    simpleDescription: '함께하는 봉사',
    starRating: 4.9,
    ratingCount: 180,
    userId: 10,
    problem:
      '다음 중 봉사 활동의 원칙이 아닌 것은?\n1) 자발성\n2) 상호 이익\n3) 비공식성',
    answer: 3,
    hashtags: ['봉사', '기여', '사회활동'],
  },
]
