import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MoreAbout from './components/MoreAbout.jsx'
import WhatWeDo from './components/WhatWeDo.jsx'
import Strategy from './components/Strategy.jsx'
import Explore from './components/Explore.jsx'
import Partners from './components/partners.jsx'
import LogoStrip from './components/LogoStrip.jsx'
import Join from './components/join.jsx'
import AffordableHomes from './components/AffordableHomes.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <div>  
      <Navbar />
      <Hero />
      <MoreAbout />
      <WhatWeDo />
      <Strategy />
      <Explore />
      <Partners />
      <LogoStrip />
      <Join />
      <AffordableHomes />
      <Footer />
    </div>
  )
}

export default App
