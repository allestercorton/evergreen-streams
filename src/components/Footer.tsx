import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-900 bg-opacity-80 p-4 mt-4'>
      <div className='container mx-auto text-center text-gray-300'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} F1 Streaming. All rights reserved.
          <br />
          Developed by EverGreen.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
