import React from 'react'
import NavBar from './components/Navigation/NavBar'
import Hero from './components/HeroSection/Hero'
const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar/>
      <Hero/>
    </main>
  )
}

export default App