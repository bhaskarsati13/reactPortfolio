import React from 'react';
import { HERO_CONTENT } from '../ourData/allConstants.js';
import about from '../images/about.jpg';
import "../index.css"
import {motion} from 'framer-motion'
const container=(delay)=>({
    hidden: {x: -100 , opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})

export default function HeroComponent() {
    const name = "Bhaskar Sati";
    const does = "FrontEnd Developer";

    console.log("Hero content:", HERO_CONTENT);

    return (
        <div className="aboutProfilePic">
            <div className="aboutContainer">
                <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    sytle={{color:'white'}}>{name}</motion.h1>
                <motion.p 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                >{does}</motion.p>
                <motion.div
                    variants={container(1)}
                    initial="hidden"
                    animate="visible">{HERO_CONTENT}</motion.div>
            </div>
            <div className="profilePic">
                <motion.img 
                initial={{x:100,opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:1,delay:1.2}}
                src={about} alt="Profile Pic" />
            </div>
        </div>
    );
}
