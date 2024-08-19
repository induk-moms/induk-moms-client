import { Routes, Route } from 'react-router-dom'
import { Main, Detail, Search, Quiz, Enter } from './pages'
import './App.css'
import SearchResult from './pages/SearchResult/SearchResult'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/enter" element={<Enter />} />
      </Routes>
    </div>
  )
}

export default App
