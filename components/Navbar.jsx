import React from 'react';
import logo1 from '../images/logo1.svg';
import '../index.css';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Navbar = () => {
  console.log("NavBar returning ~");
  return (
    <nav
      className="ourNavbar"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
      }}
    >
      <div className="NavImageContainer">
          <img
            style={{ height: 50, width: 50, filter: 'invert(1)' }}
            src={logo1} 
            alt="logo"
          />
      </div>

      <div
        className="NavIconContainer"
        style={{ display: 'flex', gap: '15px', alignItems: 'center' }}
      >
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          style={{ color: '#0A66C2', fontSize: 24 }}
        >
          <FaLinkedin />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          style={{ color: '#1DA1F2', fontSize: 24 }}
        >
          <FaTwitter />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          style={{ color: '#333', fontSize: 24 }}
        >
          <FaGithub />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          style={{ color: '#E4405F', fontSize: 24 }}
        >
          <FaInstagram />
        </motion.div>
      </div>
    </nav>
  );
};
