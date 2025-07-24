import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home'
import Aboutus from './Aboutus'
import Navbar from './Navbar'

const App = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
