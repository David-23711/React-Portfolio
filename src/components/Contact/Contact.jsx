import React, { useRef, useState } from 'react';
import './style.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_307upud',
        'template_wiawqwe',
        form.current,
        '9CA7N4eZ2cx2rYlxA'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='contact-form'>
      <div className='c-left'>
        <div className='awesome'>
          <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className='blur s-blur'
            style={{ background: '#abf1ff94' }}
          ></div>
        </div>
      </div>
      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='user_name'
            className='user'
            placeholder='Name'
          />
          <input
            type='email'
            name='user_email'
            className='user'
            placeholder='Email'
          />
          <textarea name='message' className='user' placeholder='Message' />
          <input type='submit' value='Send' className='button' />
          <span>{done && 'Thank for connecting me'}</span>
          <div
            className='blur c-blur1'
            style={{ background: 'var(--purple' }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
