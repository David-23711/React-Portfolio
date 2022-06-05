import React from 'react';
import Toggle from '../Toggle/Toggle';
import './style.css';
import { Link } from 'react-scroll';
import Menu from '@iconscout/react-unicons/icons/uil-mobile-android';
const Navbar = () => {
  const openMobile = () => {
    let mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.remove('hidden');
  };
  const closeMobile = () => {
    let mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.add('hidden');
  };
  return (
    <div className='n-wrapper' id='Navbar'>
      <div className='n-left'>
        <div className='name'>Portfolio</div>
        <Toggle />
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul>
            <Link
              spy={true}
              to='Navbar'
              smooth={true}
              activeClass='activeClass'
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to='Services'
              smooth={true}
              activeClass='activeClass'
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to='Experience'
              smooth={true}
              activeClass='activeClass'
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to='Portfolio'
              smooth={true}
              activeClass='activeClass'
            >
              <li>Portfolio</li>
            </Link>
            <Link
              spy={true}
              to='Testimonials'
              smooth={true}
              activeClass='activeClass'
            >
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className='button n-button'>Contact</button>
        <button
          onClick={openMobile}
          className='button mobile-button '
          id='open'
        >
          <Menu />
        </button>
      </div>
      <div className='mobile-nav hidden' id='mobileNav'>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Experience</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
          <li>
            <button onClick={closeMobile} className='close-btn' id='close'>
              X
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
