// import React from 'react';
import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          duration: 2000,
          style: {
            background: '#1F1F1F',
            fontFamily: 'var(--font-buttons)',
            color: '#FFF',
          },
        }}
      />
    </>
  );
};

export default Toast;