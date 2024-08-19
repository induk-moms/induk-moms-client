import { BlackSearchIcon, LogoIcon } from '../../assets'
import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import './Search.css'
import SearchResult from '../SearchResult/SearchResult'

function Search() {
  const [inputValue, setInputValue] = useState('') // 입력 값 상태
  const [items, setItems] = useState([]) // 배열 상태

  const handleInputChange = (e) => {
    setInputValue(e.target.value) // 입력 값 업데이트
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault()
      setItems([...items, inputValue]) // 배열에 입력 값 추가
      setInputValue('') // 입력 필드 비우기
    }
  }

  return (
    <>
      {items.length > 0 ? (
        <SearchResult
          items={items}
          setItems={setItems}
          handleInputChange={handleInputChange}
        />
      ) : (
        <>
          <div id="search-page-wrapper">
            <LogoIcon id="search-logo" />
            <div id="search-container">
              <input
                type="text"
                placeholder="# 해시태그를 입력해주세요"
                value={inputValue}
                onChange={handleInputChange}
                onKeyUp={handleKeyDown}
                handleKeyDown={handleKeyDown}
              />
              <BlackSearchIcon id="search-black-icon" />

              <div id="search-tag-wrapper">
                {items.map((item, index) => (
                  <div className="search-tag-elem" key={index}>
                    #{item}
                  </div> // 배열의 각 항목을 리스트로 표시
                ))}
              </div>
            </div>
          </div>
          <NavBar />
        </>
      )}
    </>
  )
}

export default Search
