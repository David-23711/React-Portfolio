import React from 'react';
import './style.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
const Intro = () => {
  const transition = { duration: 2, type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am </span>
          <span>AMG DEV</span>
          <span style={{ fontSize: '24px' }}>
          I'm a Web Developer and designer from Yangon. I can create websites to help businesses do better.

          </span>
        </div>
        <button className='button i-button'>Hire Me</button>
        <div className='i-icons'>
          <img src={Github} alt='github' />
          <img src={LinkedIn} alt='linkedin' />
          <img src={Instagram} alt='instagram' />
        </div>
      </div>
      <div className='i-right'>
        <img src={Vector1} alt='vector1' />
        <img src={Vector2} alt='vector2' />
        <img src={boy} alt='boy' />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt='glassesimoji'
        />
        <motion.div
          initial={{ top: '-4%', left: '78%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          className='floating-div'
        >
          <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
        </motion.div>
        <motion.div
          initial={{ left: '-8rem', top: '18.2rem' }}
          whileInView={{ left: '2rem' }}
          transition={transition}
          className='floating-div'
        >
          <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
        </motion.div>
        <div className='blur' style={{ background: 'rgb(238 210 255' }}>
          <div
            className='blur'
            style={{
              background: '#c1f5ff',
              top: '17rem',
              width: '21rem',
              left: '-9rem',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
