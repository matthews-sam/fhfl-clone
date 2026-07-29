import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MoreAbout from './components/MoreAbout.jsx'
import WhatWeDo from './components/WhatWeDo.jsx'
import Strategy from './components/Strategy.jsx'
import './App.css'

function App() {

  return (
    <div>  
      <Navbar />
      <Hero />
      <MoreAbout />
      <WhatWeDo />
      <Strategy />
    </div>
  )
}

export default App
