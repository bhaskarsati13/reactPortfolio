import React from 'react'
import '../index.css'
import {motion} from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="contactPage">
        <motion.h3 style={{marginBottom:'-4px'}}
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        
        >Get in Touch</motion.h3>
        <motion.p className="address"
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        
        >13/007 Sec-3A Laxman Vihar, Gurugram - 122001, Haryana, India </motion.p>
        <motion.p
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        
        >8368158011</motion.p>
        <span>@bhaskarsati59@gmail.com</span>

    </div>
  )
}
