import React, { useEffect } from 'react';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import ericthehoff from '../../assets/ericthehoff.svg';
import dark from '../../assets/dark.svg';
import light from '../../assets/light.svg';
import './footer.css';

const Footer = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    // Targeting the document element to change the page's bg color based on darkMode variable.
    document.documentElement.style.setProperty('--background-color', darkMode ? '#2B322E' : '#ECDADA');
  },[darkMode]);

  return (
    <div className='footer'>
      <a href='https://www.github.com/EricTheHoff/suave_servers' target='blank'>
        <img src={github} alt='Github'/>
      </a>
      <a href='https://www.linkedin.com/in/erichoffman98/' target='blank'>
        <img src={linkedin} alt='LinkedIn'/>
      </a>
      <a href='https://www.ericthehoff.com' target='blank'>
        <img src={ericthehoff} alt='https://www.ericthehoff.com'/>
      </a>
      <img
        onClick={() => { darkMode ? setDarkMode(false) : setDarkMode(true) }}
        src={ darkMode ? light : dark }
        alt={ darkMode ? 'Light Mode' : 'Dark Mode' }
      />
    </div>
  );
};

export default Footer;