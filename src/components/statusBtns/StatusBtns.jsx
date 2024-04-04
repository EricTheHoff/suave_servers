import React from 'react';
import axios from 'axios';
import { statusBtns } from '../index.js';
import Footer from '../footer/Footer.jsx';
import './statusBtns.css';

const StatusBtns = ({ darkMode, setDarkMode, setShowModal, setModalData }) => {
  // This fires whenever a button is clicked.
  const getModalData = async (id) => {
    try {
      // Calling Express with the button id as a parameter.
      const res = await axios.get(`/api/status?buttonId=${id}`);
      // Updating modalData with response data.
      setModalData(res.data.message);
      // Displaying modal after modalData has been populated.
      setShowModal(true);
    } catch (error) {
      console.error(`Could not obtain status data. Error: ${error}`);
    };
  };

  return (
    <div className={ darkMode ? 'status-btns btns-dark' : 'status-btns' }>

      {/* Top 3 buttons */}
      <div className='status-btns__top-row'>
        {statusBtns.map((el, idx) => {
            // Only rendering the first 3 elements as buttons
            if (idx < 3) {
              return (
                <button key={idx} onClick={() => getModalData(idx)}>{el}</button>
              );
            };
        })}
      </div>

      {/* Middle 3 buttons */}
      <div className='status-btns__middle-row'>
        {statusBtns.map((el, idx) => {
            // Only rendering the middle 3 elements as buttons
            if (idx >= 3 && idx < 6) {
              return (
                <button key={idx} onClick={() => getModalData(idx)}>{el}</button>
              );
            };
        })}
      </div>

      {/* Bottom 3 buttons */}
      <div className='status-btns__bottom-row'>
        {statusBtns.map((el, idx) => {
            // Only rendering the last 3 elements as buttons
            if (idx >= 6) {
              // Rendering buttons normally if they aren't 500 Internal Server Error
              if (el !== '500 Internal Server Error') {
                return (
                  <button key={idx} onClick={() => getModalData(idx)}>{el}</button>
                );
              } else {
                // Adding line break if they are so the button text doesn't go off the button
                return (
                  <button key={idx} onClick={() => getModalData(idx)}>500 Internal<br/>Server Error</button>
                );
              }
            };
        })}
      </div>

      {/* Rendering Footer within StatusBtns to keep Footer nested underneath StatusBtn's absolute positioning. */}
      <Footer
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

    </div>
  );
};

export default StatusBtns;