import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux } from 'react-icons/si';
import {motion} from 'framer-motion'

const iconVariants=(duration)=>(
  {
    initial:{y:-10},
    animate: {
      y:[10,-10],
      transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"
        },
    },
  }
)

export default function Technologies() {
  return (
    <>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      style={{ color: 'white', fontSize: '50px', textAlign: 'center',  }}>
        Technologies
      </motion.h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="iconContainer"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginTop: '-20px',
        }}
      >
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
          style={{
            border: '2px solid grey',
            borderRadius: '10px',
            padding: '10px',
            color: '#E34F26',
          }}
        >
          <SiHtml5 size={30} />
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
          style={{
            border: '2px solid grey',
            borderRadius: '10px',
            padding: '10px',
            color: '#1572B6',
          }}
        >
          <SiCss3 size={30} />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
          style={{
            border: '2px solid grey',
            borderRadius: '10px',
            padding: '10px',
            color: '#F7DF1E',
          }}
        >
          <SiJavascript size={30} />
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
          style={{
            border: '2px solid grey',
            borderRadius: '10px',
            padding: '10px',
            color: '#61DAFB',
          }}
        >
          <SiReact size={30} />
        </motion.div>
        <motion.div
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
          style={{
            border: '2px solid grey',
            borderRadius: '10px',
            padding: '10px',
            color: '#764ABC',
          }}
        >
          <SiRedux size={30} />
        </motion.div>
      </motion.div>
    </>
  );
}
