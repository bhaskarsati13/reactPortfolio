import React from 'react'
import { ABOUT_TEXT } from '../ourData/allConstants.js'
import  bhaskarSati  from '../images/bhaskarSati.jpg'
import '../index.css'
import {motion} from 'framer-motion'

export default function AboutMe() {
  return (
    <>
      <h1 style={{ color: 'black', textAlign: 'center' , fontSize: '50px' ,marginBottom:'-47px'}}>About <span style={{color:'darkgrey', opacity:0.5}}>me</span></h1>

      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}} className="pfpAboutMe">
        <img src={bhaskarSati} alt="pfp" />
        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration:0.5}} className="aboutMe">
          <p>{ABOUT_TEXT}</p>
        </motion.div>
      </motion.div>
    </>
  )
}
