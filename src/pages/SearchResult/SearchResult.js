import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { BlackSearchIcon, BlueClickIcon, LogoIcon, XIcon } from '../../assets'
import './SearchResult.css'

function SearchResult({ items, setItems }) {
  const [inputValue, setInputValue] = useState('')
  const [recommendedClubs, setRecommendedClubs] = useState([])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const newItems = [...items, inputValue]
      setItems(newItems)
      setInputValue('')
      await fetchRecommendedClubs(newItems)
    }
  }

  const fetchRecommendedClubs = async (tags) => {
    try {
      const hashTags = tags.map((tag) => `#${tag}`).join(' ')
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/v1/recommend/clubs`,
        {
          params: { hashTags },
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      )
      console.log('API Response:', response.data) // 콘솔에 API 응답 로그 출력
      setRecommendedClubs(response.data)
    } catch (error) {
      console.error('Error fetching recommended clubs:', error)
    }
  }

  useEffect(() => {
    if (items.length > 0) {
      fetchRecommendedClubs(items)
    }
  }, [items])

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
          </div>
        ))}
      </div>

      <SimpleSlider clubs={recommendedClubs} />
    </div>
  )
}

function SimpleSlider({ clubs }) {
  const sliderRef = useRef(null)

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
        {clubs.map((club) => (
          <SliderWrapper key={club.clubId} data={club} />
        ))}
      </Slider>
    </div>
  )
}

function SliderWrapper({ data }) {
  console.log(data)
  return (
    <div className="slider-wrapper">
      <div id="slider-wrapper-flex1">
        <div id="slider-title-name">{data.clubName}</div>
        <SliderInfo title="동아리 소속">
          <div>인하대학교</div>
        </SliderInfo>
        <SliderInfo title="유형">
          {data.hashTags.split(' ').map((tag, index) => (
            <Tag key={index} name={tag} />
          ))}
        </SliderInfo>
        <SliderInfo title="평점">
          <div>⭐️ {data.starRating}</div>
        </SliderInfo>
        <SliderInfo title="인원수">
          <div>{data.clubUserCount}명</div>
        </SliderInfo>
        <SliderInfo title="추천 설명">
          <div id="slider-description">{data.result}</div>
        </SliderInfo>
      </div>

      <Link to={`/detail`} state={{ clubId: data.clubId }}>
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

function Tag({ name }) {
  return <div id="search-result-tag">{name}&nbsp;</div>
}

export default SearchResult
