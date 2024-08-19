import React, { useState } from 'react'
import { LogoIcon } from '../../assets'
import Select from 'react-select'
import './Header.css'

const options = [
  { value: '모든 클럽', label: '모든 클럽' },
  { value: '연합 클럽', label: '연합 클럽' },
  { value: '교내 클럽', label: '교내 클럽' },
]

function Header() {
  const [selectedOption, setSelectedOption] = useState({
    value: '모든 클럽',
    label: '모든 클럽',
  })
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }
  console.log(selectedOption)

  return (
    <div id="main-header">
      <LogoIcon id="main-header-logo" />
      <div>CLUB LIST</div>
      <Select
        id="main-header-select"
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}

export default Header
