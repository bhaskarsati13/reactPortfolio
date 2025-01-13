import React from 'react'
import { Navbar } from './components/Navbar'

import AboutMe from './components/AboutMe'
import HeroComponent from './components/HeroComponent'
import Technologies from './components/Technologies'
import Project from './components/Project'
import ContactPage from './components/ContactPage'
// import selectOption from './ourData/allConstants'

export default function App() {
  return (
    <>
      <Navbar/> 
      <HeroComponent/>
      <AboutMe/>
      <Technologies/>
      <Project/>
      <ContactPage/>

    </>
  )
}
