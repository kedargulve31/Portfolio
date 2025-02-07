import { useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
   <Routes>
    <Route path='/home' Component={Hero}></Route>
    <Route path='/skills' Component={Skills}></Route>
    <Route path='/projects' Component={Project}></Route>
    <Route path='/exper' Component={Experience}></Route>
    {/* <Route path='/home' Component={Hero}></Route> */}
   </Routes>

   <div className='bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white relative overflow-hidden' >



   <Navbar/>
  <Hero/>
  <Skills/>
  <Experience/>
  <Project/>
  <Contact/>
  <Footer/>
   </div>
    </>
  )
}

export default App
