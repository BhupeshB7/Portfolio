import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import About from './components/pages/About'
import IntelliTicksChatbot from './components/IntelliTicksChatbot'
import ScrollProgressBar from './components/ScrollProgressBar'
const App = () => {
  return (
    <div >
      <ScrollProgressBar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
      <IntelliTicksChatbot /> 
    </div>
  )
}

export default App