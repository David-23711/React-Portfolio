import React from 'react';
import './style.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import Resume from './CV Form.pdf';
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: 'spring' };
  return (
    <div className='services' id='Services'>
      <div className='awesome'>
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>services</span>
        <span style={{ fontSize: '18px' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam neque
          <br />
          ullam porro ipsam dolorem ut nostrum corrupti, itaque facere esse.
        </span>
        <a href={Resume}>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur1' style={{ background: '#abf1ff94' }}></div>
      </div>
      <div className='cards'>
        <motion.div
          whileInView={{ left: '20rem' }}
          initial={{ left: '25rem' }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Figma, Sketch, Photoshop, Adobe Illustrator'}
          />
        </motion.div>
        <motion.div
          whileInView={{ left: '1rem', top: '10rem' }}
          initial={{ left: '-3rem', top: '12rem' }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={'Html, Css, JavaScript, React, Vue, Laravel'}
          />
        </motion.div>
        <motion.div
          whileInView={{ left: '18rem' }}
          initial={{ top: '24rem', left: '22rem' }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={'Html, Css, JavaScript, React, Vue, Laravel'}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
