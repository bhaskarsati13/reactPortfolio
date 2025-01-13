import React from 'react';
import { ourProjects } from "../ourData/allConstants.js";
import '../index.css';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

export default function Project() {
  const projectList = ourProjects.projects; 
  console.log(projectList);

  return (
    <>
    <motion.h3
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:0.5}}
    
    style={{color:'white' , fontSize:'50px', textAlign:'center', marginTop:'70px'}}>Projects</motion.h3>
    <div className="projectOuterContainer">
      {projectList.map((project) => ( 
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        
        className="projectContainer" key={project.name}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt="projectHome" />
          </a>


          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}}
          
          className="projectInfo">
            <h3>{project.name}</h3> 
            <p>{project.description}</p>
            {project.technologyUsed.map((item, index) => (
              <span href="www.gmail.com"key={index}>{item}</span>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
    </>
  )
}
