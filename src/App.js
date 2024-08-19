import { Routes, Route } from 'react-router-dom'
import { Main, Detail } from './pages'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
