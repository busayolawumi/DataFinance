import React from 'react'
import Analytics from './Components/Analytics'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Newsletter from './Components/Newsletter'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  )
}

export default App