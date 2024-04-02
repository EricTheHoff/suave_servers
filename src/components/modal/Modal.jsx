import React, { useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codeStyle } from '../index.js';
import toast from 'react-hot-toast';
import Toast from '../toast/Toast.jsx';
import exit from '../../assets/exit.svg';
import copy from '../../assets/copy.svg';
import './modal.css';

const Modal = ({ setShowModal, modalData }) => {
  // Creating a null reference for the copy-to-clipboard image
  const copyRef = useRef(null);
  // Modal values, obtained from StatusBtns.jsx via Express, then passed up to App.jsx and back down to Modal.jsx.
  const title = modalData.title;
  const subtitle = modalData.subtitle;
  const code = modalData.code;
  const description = modalData.description;
  const mdnLink = modalData.mdnLink;

  const clickToCopy = () => {
    // Copies the code string to the OS's clipboard.
    navigator.clipboard.writeText(code).then(() => {
      // Adds a CSS class called 'scale-up' to give feedback when the button is clicked.
      copyRef.current.classList.add('scale-up');
      // Toast notification after the code snippet has been copied.
      toast('Copied to Clipboard')
      // 'scale-up' is removed after .2s to match transition values in modal.css.
      setTimeout(() => {
        copyRef.current.classList.remove('scale-up');
      }, 200);
    });
  };

  return (
    <div className='modal-container'>
      <div className='modal slide-bottom'>

        <div className='modal__header'>

          <div className='modal__header--title'>
            <div className='modal__header--title_bar'></div>
            <div className='modal__header--title_text'>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>
          </div>

          <div className='modal__header--exit'>
            <img onClick={() => setShowModal(false)} src={exit} alt='Exit'/>
          </div>

        </div>

        <div className='modal__content'>

          <div className='modal__content--code'>
            <div className='modal__content--code_copy' title='Copy to Clipboard'>
              <img ref={copyRef} onClick={clickToCopy} src={copy} alt='Copy to Clipboard'/>
            </div>

            <div className='modal__content--code_snippet'>
              <SyntaxHighlighter
                language='javascript'
                style={solarizedlight}
                customStyle={codeStyle}
                showLineNumbers
                wrapLongLines
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>

          <div className='modal__content--description'>
            <p>{description}</p>
            <p>To learn more about this status code,
              visit MDN's web docs <a href={mdnLink} target='blank'>here</a>!
            </p>
          </div>
        </div>


      </div>

      <Toast/>
    </div>
  );
};

export default Modal;