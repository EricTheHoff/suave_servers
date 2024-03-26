// import axios from 'axios';
// import Modal from './components/modal/Modal.jsx';
import { useState, useEffect } from 'react';
import './App.css';
// Need to find cleaner way to import assets here.
import man from './assets/man.png'
import coolMan from './assets/coolMan.png'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import ericthehoff from './assets/ericthehoff.svg'
import dark from './assets/dark.svg'
import light from './assets/light.svg'
import exit from './assets/exit.svg'
import copy from './assets/copy.svg'

function App() {
  // Tracks whether or not to show dark mode color scheme.
  const [darkMode, setDarkMode] = useState(false);
  // Tracks whether or not to show info modal.
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Targeting the root element to change the page's bg color based on darkMode variable.
    document.documentElement.style.setProperty('--background-color', darkMode ? '#2B322E' : '#ECDADA')
  },[darkMode])

  return (
    <>
      {/* Container for home page. This is an SPA, so it's really the only page. */}
      <div className='home'>

        {/* Container for header section, which includes the welcome message and man image. */}
        <div className='home__header'>
          {/* Container for the image in the header section. */}
          <div className={darkMode ? 'home__header--image image-dark' : 'home__header--image'}>
            {/* Rendering both images and setting the second's opacity to 0 by default; doing this so image change happens smoothly via CSS transition. */}
            <img className={darkMode ? 'fade-out' : 'fade-in'} src={man} alt='Cool Man'/>
            <img className={darkMode ? 'fade-in' : 'fade-out'} src={coolMan} alt='Cool Man'/>
          </div>
          {/* Container for the title/welcome message in the header section. */}
          <div className={darkMode ? 'home__header--titles titles-dark' : 'home__header--titles'}>
            <h1>Welcome, weary developer, to<br/>| Suave Servers |</h1>
            <h2>Your fancy boilerplate cheat-sheet<br/>for better HTTP status usage in Express!</h2>
            <h2>Press a button to see some examples</h2>
          </div>
        </div>

        {/* Container for the button grid and button icons at the bottom. Might turn buttons into a component. */}
        <div className={darkMode ? 'home__buttons buttons-dark' : 'home__buttons'}>
          {/* Top 3 buttons. */}
          <div className='home__buttons--top-row'>
            <button onClick={() => setShowModal(true)}>200 OK</button>
            <button>201 Created</button>
            <button>204 No Content</button>
          </div>
          {/* Middle 3 buttons. */}
          <div className='home__buttons--middle-row'>
            <button>304 Not Modified</button>
            <button>400 Bad Request</button>
            <button>401 Unauthorized</button>
          </div>
          {/* Bottom 3 buttons. */}
          <div className='home__buttons--bottom-row'>
            <button>403 Forbidden</button>
            <button>404 Not Found</button>
            <button>500 Internal<br/>Server Error</button>
          </div>
          {/* Container for the button icons for Github, LinkedIn, Portfolio, and Dark/Light Mode. */}
          <div className='home__buttons--icons'>
            <a href='https://www.github.com/EricTheHoff/suave_servers' target='blank'><img src={github} alt='Github'/></a>
            <a href='https://www.linkedin.com/in/erichoffman98/' target='blank'><img src={linkedin} alt='LinkedIn'/></a>
            <a href='https://www.ericthehoff.com' target='blank'><img src={ericthehoff} alt='https://www.ericthehoff.com'/></a>
            <img onClick={() => {darkMode ? setDarkMode(false) : setDarkMode(true)}} src={darkMode ? light : dark} alt='Dark Mode'/>
          </div>
        </div>

        {/* Rendering this section conditionally based on if showModal is true or false. */}
        {showModal ? 
          <div className='test-container'>
            <div className='test slide-bottom'>

              <div className='modal__header'>
                <div className='modal__header--titles'>
                  <div className='modal__header--titles-bar'></div>
                  <div className='modal__header--titles-text'>
                    <h1>200 OK</h1>
                    <h2>Successful Response</h2>
                  </div>
                </div>
                <div className='modal__header--exit'>
                  <img onClick={() => setShowModal(false)} src={exit} alt='Exit'/>
                </div>
              </div>

              <div className='modal__header--content'>
                <div className='modal__header--content_code'>
                  <div className='modal__header--content_code-copy'>
                    <img src={copy} alt='Copy to Clipboard'/>
                  </div>
                  <div>
                    <pre className='code-snippet'>
                      <code>
                        {`
            1  app.get('/api/your-route', (req, res) => {
            2    // interact with req data here.
            3    // Send a 200 OK in the res.json object.
            4    res.json({
            5      message: 'OK',
            6      status: 200,
            7    })
            8  })
                         `}
                      </code>
                    </pre>
                    
                  </div>
                </div>
                <div className='modal__header--content_text'>
                  <p>The 200 OK response indicates that the request succeeded.
                    The exact meaning of a 200 OK can vary, depending on the
                    HTTP method used to prompt it.
                  </p>
                  <p>To learn more about this status code,
                    visit MDN's web docs <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200' target='blank'>here!</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          :
          <></>
        }

      </div>
    </>
  )
}

export default App