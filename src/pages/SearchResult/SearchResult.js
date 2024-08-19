import Slider from 'react-slick'
import React, { Component, useState } from 'react'
import styled from 'styled-components'
import { BlackSearchIcon, BlueClickIcon, LogoIcon, XIcon } from '../../assets'
import { useRef } from 'react'
import './SearchResult.css'
import { Link } from 'react-router-dom'

function SearchResult({ items, setItems }) {
  const [inputValue, setInputValue] = useState('') // 입력 값 상태

  const handleInputChange = (e) => {
    setInputValue(e.target.value) // 입력 값 업데이트
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setItems([...items, inputValue]) // 배열에 입력 값 추가
      setInputValue('') // 입력 필드 비우기
    }
  }

  return (
    <div id="search-result-page-wrapper">
      <div id="search-result-page-header">
        <LogoIcon />
        <Link to="/search" onClick={() => setItems([])}>
          <XIcon />
        </Link>
      </div>
      <input
        type="text"
        placeholder="# 해시태그를 입력해주세요"
        id="search-result-input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <BlackSearchIcon id="result-black-search-icon" />

      <div id="search-tag-wrapper">
        {items.map((item, index) => (
          <div className="search-tag-elem" key={index}>
            #{item}
          </div> // 배열의 각 항목을 리스트로 표시
        ))}
      </div>

      <SimpleSlider />
    </div>
  )
}

export default SearchResult

function Tag({ name }) {
  return <div id="search-result-tag">{name}&nbsp;</div>
}

function SimpleSlider() {
  const sliderRef = useRef(null) // 슬라이더 참조

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="App">
      <Slider ref={sliderRef} {...settings}>
        {/* <SliderWrapper />
        <SliderWrapper />
        <SliderWrapper />
        <SliderWrapper />
        <SliderWrapper /> */}
        {data.map((elem) => (
          <SliderWrapper data={elem} />
        ))}
      </Slider>
      {/* <div className="button-container">
        <button onClick={() => sliderRef.current.slickPrev()}>이전</button>
        <button onClick={() => sliderRef.current.slickNext()}>다음</button>
      </div> */}
    </div>
  )
}

function SliderWrapper({ children, data }) {
  return (
    <div className="slider-wrapper">
      <div id="slider-wrapper-flex1">
        <div id="slider-title-name">{data.title}</div>
        <SliderInfo title="동아리 소속">
          <div>인하대학교</div>
        </SliderInfo>
        <SliderInfo title="유형">
          {/* <Tag name="# 개발" />
          <Tag name="# 해커톤" />
          <Tag name="# 인하대" /> */}
          {data.tag.map((tag) => (
            <Tag name={'#' + tag + ' '} />
          ))}
        </SliderInfo>
        <SliderInfo title="평점">
          <div>⭐️ {data.starRating}</div>
        </SliderInfo>
        <SliderInfo title="인원수">
          <div>{data.people}명</div>
        </SliderInfo>
        <SliderInfo title="추천 설명">
          <div id="slider-description">{data.description}</div>
        </SliderInfo>
      </div>

      <Link to="/detail">
        <BlueClickIcon id="bluc-click-icon" />
      </Link>
    </div>
  )
}

function SliderInfo({ title, children }) {
  return (
    <div className="slider-info-wrapper">
      <div className="slider-info-title">{title}</div>
      {children}
    </div>
  )
}

const data = [
  {
    id: 1,
    title: '코딩 마스터즈',
    type: '인하대학교',
    tag: ['개발', '해커톤', '인하대'],
    starRating: 4.32,
    people: 50,
    description:
      '개발 해시태그가 직접적으로 일치하며, 높은 별점(4.32)을 가지고 있습니다. 코딩과 프로그래밍 관련 활동은 공부와 연관성이 높습니다.',
  },
  {
    id: 2,
    title: '독서둥가',
    type: '연합 동아리',
    tag: ['독서', '책', '유엔'],
    starRating: 4.5,
    people: 120,
    description:
      '독서와 토론 활동은 공부와 밀접한 관련이 있으며, 가장 높은 별점(4.67) 중 하나를 가지고 있습니다. 또한 토론 활동을 통해 친목과 친구 만들기에 적합합니다.',
  },
  {
    id: 3,
    title: '비즈니스 인사이트',
    type: '인하대학교',
    tag: ['비즈니스', '경제', '마케팅'],
    starRating: 4.6,
    people: 90,
    description:
      '언어교환 활동은 공부와 직접적으로 연관되어 있으며, 다양한 사람들과 교류하며 친목을 도모할 수 있습니다. 높은 별점(4.23)도 갖고 있습니다.',
  },
  {
    id: 4,
    title: '과학 예술가들',
    type: '인하대학교',
    tag: ['과학', '예술', '촬영'],
    starRating: 4.67,
    people: 85,
    description:
      '과학과 실험 활동은 공부와 밀접한 관련이 있으며, 가장 높은 별점(4.76) 중 하나를 가지고 있습니다. 연구 활동을 통해 개발 관련 스킬도 향상시킬 수 있습니다.',
  },
  {
    id: 5,
    title: '요리 쿠키쿠키',
    type: '연합 동아리',
    tag: ['음식', '요리', '맛집'],
    starRating: 4.5,
    people: 120,
    description:
      '요리 활동은 직접적으로 연관되지는 않지만, 가장 높은 별점(4.89)을 가지고 있으며, 함께 요리하는 과정에서 친목과 친구 만들기에 매우 적합합니다.',
  },
]
