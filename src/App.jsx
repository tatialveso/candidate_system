import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CandidateList from './components/Candidate/CandidateList'
import Navbar from './components/Navbar'
import { useState } from 'react'
import CandidateDetail from './components/Candidate/CandidateDetail'

function App() {
  const [candidates, setCandidates] = useState([])
  const [search, setSearch] = useState("")

  return (
    <div>
      <BrowserRouter>
          <Navbar search={ search } setSearch={ setSearch } />
        <Routes>
          <Route path="/" element={ <CandidateList search={ search } candidates={ candidates } setCandidates={ setCandidates } /> } />
          <Route path="/candidato/:id" element={ <CandidateDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
