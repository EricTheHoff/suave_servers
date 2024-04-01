import React from 'react';
import { topRowBtns, midRowBtns, botRowBtns } from '../index.js';
import './statusBtns.css';

const StatusBtns = ({ darkMode }) => {
  return (
    <div className={ darkMode ? 'status-btns btns-dark' : 'status-btns' }>

      {/* Top 3 buttons */}
      <div className='status-btns__top-row'>
        {topRowBtns.map((el, idx) => {
            return (
              <button key={idx}>{el}</button>
            );
        })}
      </div>

      {/* Middle 3 buttons */}
      <div className='status-btns__middle-row'>
        {midRowBtns.map((el, idx) => {
            return (
              <button key={idx}>{el}</button>
            );
        })}
      </div>

      {/* Bottom 3 buttons */}
      <div className='status-btns__bottom-row'>
        {botRowBtns.map((el, idx) => {
            return (
              <button key={idx}>{el}</button>
            );
        })}
      </div>
      
    </div>
  );
};

export default StatusBtns;