import axios from 'axios';
import Modal from './components/modal/Modal.jsx';
import { useState, useEffect } from 'react';
import './App.css';
import man from './assets/man.png'
import coolMan from './assets/coolMan.png'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import ericthehoff from './assets/ericthehoff.svg'
import dark from './assets/dark.svg'
import light from './assets/light.svg';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Targeting the root element to change the page's bg color based on darkMode variable.
    document.documentElement.style.setProperty('--background-color', darkMode ? '#2B322E' : '#ECDADA')
  },[darkMode])

  return (
    <>
      <div className='home'>

        <div className='home__header'>
          <div className={darkMode ? 'home__header--image image-dark' : 'home__header--image'}>
            <img className={darkMode ? 'fade-out' : 'fade-in'} src={man} alt='Cool Man'/>
            <img className={darkMode ? 'fade-in' : 'fade-out'} src={coolMan} alt='Cool Man'/>
          </div>
          <div className={darkMode ? 'home__header--titles titles-dark' : 'home__header--titles'}>
            <h1>Welcome, weary developer, to<br/>| Suave Servers |</h1>
            <h2>Your fancy boilerplate cheat-sheet<br/>for better HTTP status usage in Express!</h2>
            <h2>Press a button to see some examples</h2>
          </div>
        </div>

        <div className={darkMode ? 'home__buttons buttons-dark' : 'home__buttons'}>
          <div className='home__buttons--top-row'>
            <button onClick={() => alert(`button clicked`)}>200 OK</button>
            <button>201 Created</button>
            <button>204 No Content</button>
          </div>
          <div className='home__buttons--middle-row'>
            <button>304 Not Modified</button>
            <button>400 Bad Request</button>
            <button>401 Unauthorized</button>
          </div>
          <div className='home__buttons--bottom-row'>
            <button>403 Forbidden</button>
            <button>404 Not Found</button>
            <button>500 Internal<br/>Server Error</button>
          </div>
          <div className='home__buttons--icons'>
            <a href='https://www.github.com/EricTheHoff/suave_servers' target='blank'><img src={github} alt='Github'/></a>
            <a href='https://www.linkedin.com/in/erichoffman98/' target='blank'><img src={linkedin} alt='LinkedIn'/></a>
            <a href='https://www.ericthehoff.com' target='blank'><img src={ericthehoff} alt='https://www.ericthehoff.com'/></a>
            <img onClick={() => {darkMode ? setDarkMode(false) : setDarkMode(true)}} src={darkMode ? light : dark} alt='Dark Mode'/>
          </div>
        </div>

        {/* <div className='test'></div> */}


      </div>
    </>
  )
}

export default App
