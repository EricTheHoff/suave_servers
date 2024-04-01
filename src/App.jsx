import { useState } from 'react';
import Header from './components/header/Header.jsx';
import StatusBtns from './components/statusBtns/StatusBtns.jsx';
import Modal from './components/modal/Modal.jsx';
import './App.css';

function App() {
  // Tracks whether or not to show dark mode color scheme.
  const [darkMode, setDarkMode] = useState(false);
  // Tracks whether or not to show info modal.
  const [showModal, setShowModal] = useState(false);
  // Tracks the information to display in the modal.
  const [modalData, setModalData] = useState(null);

  return (
    <>
      <div className='app'>
        <Header darkMode={darkMode}/>
        <StatusBtns
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setShowModal={setShowModal}
          setModalData={setModalData}
        />
      </div>
      {showModal ?
        <Modal
          setShowModal={setShowModal}
          modalData={modalData}
        />
        :
        <></>
      }
    </>
  );
};

export default App