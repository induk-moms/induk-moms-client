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
  return <div id="search-result-tag">{name}</div>
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
        <SliderWrapper />
        <SliderWrapper />
        <SliderWrapper />
        <SliderWrapper />
        <SliderWrapper />
      </Slider>
      {/* <div className="button-container">
        <button onClick={() => sliderRef.current.slickPrev()}>이전</button>
        <button onClick={() => sliderRef.current.slickNext()}>다음</button>
      </div> */}
    </div>
  )
}

function SliderWrapper({ children }) {
  return (
    <div className="slider-wrapper">
      <div id="slider-wrapper-flex1">
        <div id="slider-title-name">IGRUS</div>
        <SliderInfo title="동아리 소속">
          <div>인하대학교</div>
        </SliderInfo>
        <SliderInfo title="유형">
          <Tag name="# 개발" />
          <Tag name="# 해커톤" />
          <Tag name="# 인하대" />
        </SliderInfo>
        <SliderInfo title="평점">
          <div>⭐️ 4.8</div>
        </SliderInfo>
        <SliderInfo title="인원수">
          <div>50명</div>
        </SliderInfo>
        <SliderInfo title="추천 설명">
          <div id="slider-description">
            개발 관련 동아리로, 유저의 "#개발" 관심사와 직접적으로 연관되며 높은
            별점(4.32)을 가지고 있습니다.
          </div>
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
