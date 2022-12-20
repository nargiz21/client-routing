import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './layout/Home'
import About from './layout/About'
import Jobs from './layout/Jobs'
import Contact from './layout/Contact'
import Profile from './layout/Profile'

const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='/about' element={<About />} /> 
            <Route path='/jobs' element={<Jobs />} /> 
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/profile' element={<Profile />} /> 

        </Routes>
    </div>
  )
}

export default Pages