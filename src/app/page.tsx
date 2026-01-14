import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './about/About'
import Link from 'next/link'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div id='about'><About /></div>
      <div id='projects'><Projects /></div>
      <div id='contact'><Contact /></div>
      <Footer />
     
    </div>
  )
}

export default page