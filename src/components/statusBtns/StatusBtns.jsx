import React from 'react';
import { topRowBtns, midRowBtns, botRowBtns } from '../index.js';
import Footer from '../footer/Footer.jsx';
import './statusBtns.css';

const StatusBtns = ({ darkMode, setDarkMode, setShowModal }) => {
  return (
    <div className={ darkMode ? 'status-btns btns-dark' : 'status-btns' }>

      {/* Top 3 buttons */}
      <div className='status-btns__top-row'>
        {topRowBtns.map((el, idx) => {
            return (
              <button key={idx} onClick={() => setShowModal(true)}>{el}</button>
            );
        })}
      </div>

      {/* Middle 3 buttons */}
      <div className='status-btns__middle-row'>
        {midRowBtns.map((el, idx) => {
            return (
              <button key={idx} onClick={() => setShowModal(true)}>{el}</button>
            );
        })}
      </div>

      {/* Bottom 3 buttons */}
      <div className='status-btns__bottom-row'>
        {botRowBtns.map((el, idx) => {
            return (
              <button key={idx} onClick={() => setShowModal(true)}>{el}</button>
            );
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