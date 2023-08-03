import React from 'react'
import Header from './components/Navbar/Header'
import './App.css'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Header/>
    <BrowserRouter>
   <Routes>
   <Route path="/" element={<Homepage />} />
   </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
