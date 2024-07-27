import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className='bg-gray-900 px-4 py-4 md:py-1 fixed w-full z-50 shadow-md'>
      <div className='container mx-auto flex items-center justify-between'>
        <button
          onClick={handleLogoClick}
          className='text-xl font-bold text-white focus:outline-none'
        >
          F1 Livestream
        </button>
        <div className='md:hidden'>
          <button
            onClick={handleMenuToggle}
            className='text-white focus:outline-none'
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul
          className={`fixed inset-0 bg-gray-900 md:static md:flex md:items-center md:space-x-4 md:bg-transparent transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:flex-row flex flex-col items-center justify-center`}
        >
          <div className='absolute top-4 right-4 md:hidden'>
            <button onClick={handleMenuToggle} className='text-white'>
              <FaTimes size={24} />
            </button>
          </div>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `block p-4 text-lg md:text-base text-white ${
                  isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`
              }
              end
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/livestream'
              className={({ isActive }) =>
                `block p-4 text-lg md:text-base text-white ${
                  isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`
              }
              onClick={handleLinkClick}
            >
              Live Streams
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/schedule'
              className={({ isActive }) =>
                `block p-4 text-lg md:text-base text-white ${
                  isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`
              }
              onClick={handleLinkClick}
            >
              Schedules
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/results'
              className={({ isActive }) =>
                `block p-4 text-lg md:text-base text-white ${
                  isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`
              }
              onClick={handleLinkClick}
            >
              Results
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
