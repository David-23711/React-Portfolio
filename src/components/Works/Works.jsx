import React from 'react';
import './style.css';
import UpWork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works' id='Works'>
      <div className='awesome'>
        <span style={{ color: darkMode ? 'white' : '' }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span style={{ fontSize: '24px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          <br />
          eligendi? Ipsum ducimus, quo nesciunt amet dolorum suscipit dicta
          <br />
          eligendi? Ipsum ducimus, quo nesciunt amet dolorum suscipit dicta
          <br />
          eligendi? Ipsum ducimus, quo nesciunt amet dolorum suscipit dicta
        </span>
        <button className='button s-button'>Hire Me</button>
        <div className='blur s-blur' style={{ backgorund: '#abf1ff94' }}></div>
      </div>
      <div className='w-right'>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className='w-mainCircle'
        >
          <div className='w-secCircle'>
            <img src={UpWork} alt='upwork' />
          </div>
          <div className='w-secCircle'>
            <img src={Fiverr} alt='fiverr' />
          </div>
          <div className='w-secCircle'>
            <img src={Amazon} alt='amazon' />
          </div>
          <div className='w-secCircle'>
            <img src={Shopify} alt='shopify' />
          </div>
          <div className='w-secCircle'>
            <img src={Facebook} alt='facebook' />
          </div>
        </motion.div>
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
      </div>
    </div>
  );
};

export default Works;
