import React from 'react';
import { Toaster } from 'react-hot-toast';
import './toast.css';

const Toast = () => {
  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          className: 'toast',
          duration: 2000,
        }}
      />
    </>
  );
};

export default Toast;