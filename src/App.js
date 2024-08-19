import { Routes, Route } from 'react-router-dom'
import { Main, Detail, Search } from './pages'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
