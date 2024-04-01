import React from 'react';
import './header.css';
import man from '../../assets/man.png';
import coolMan from '../../assets/coolMan.png';

const Header = ({ darkMode }) => {
  return (
    <div className='header'>
      <div className={ darkMode ? 'header__image image-dark' : 'header__image' }>
        <img
          className={ darkMode ? 'fade-out' : 'fade-in' }
          src={ man }
          alt='A Mediocre Developer'
        />
        <img
          className={ darkMode ? 'fade-in' : 'fade-out' }
          src={ coolMan }
          alt='A Really Cool Developer'
        />
      </div>
      <div className={ darkMode ? 'header__title title-dark' : 'header__title' }>
        <h1>Welcome, weary developer, to<br/>| Suave Servers |</h1>
        <h2>Your fancy boilerplate cheat-sheet<br/>for better HTTP status usage in Express {'(with Axios)'}!</h2>
        <h2>Press a button to see some examples</h2>
      </div>
    </div>
  );
};

export default Header;