import React from 'react'
import NavBar from './components/Navigation/NavBar'
import Hero from './components/HeroSection/Hero'
import Cursor from './components/common/Cursor'
import { useState } from 'react'
import About from './components/About/About'
const App = () => {
  const [activeColor, setActiveColor] = useState("transparent");
  return (
    <main className='max-w-7xl mx-auto'>
      <Cursor activeColor={activeColor} />
      <NavBar setActiveColor={setActiveColor}/>
      <Hero/>
      <About/>
    </main>
  )
}

export default App