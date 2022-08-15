import React from 'react';
import './style.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience' id='Experience'>
      <div className='achievement'>
        <div className='circle'>2+</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className='achievement'>
        <div className='circle'>10+</div>
        <span>complete</span>
        <span>Projects</span>
      </div>
      <div className='achievement'>
        <div className='circle'>0</div>
        <span>companies</span>
        <span>work</span>
      </div>
    </div>
  );
};

export default Experience;
