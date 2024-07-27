import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className='bg-gray-800 px-4 py-4 md:py-1 fixed w-full z-50 shadow-md'>
      <div className='container mx-auto flex items-center justify-between'>
        <button
          onClick={handleLogoClick}
          className='text-xl font-bold text-white focus:outline-none'
        >
          Formula 1 Livestream
        </button>
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-white focus:outline-none'
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul
          className={`fixed inset-0 bg-gray-800 md:static md:flex md:items-center md:space-x-4 md:bg-transparent transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:flex-row`}
        >
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `block p-4 text-white ${
                  isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`
              }
              end
              onClick={handleLinkClick}
            >
              Home
              {/* Display the close icon on active link in mobile view */}
              <span className={`md:hidden ${isOpen ? '' : 'hidden'}`}>
                <FaTimes
                  size={16}
                  className='inline ml-2 cursor-pointer'
                  onClick={handleLinkClick}
                />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/livestream'
              className={({ isActive }) =>
                `block p-4 text-white ${
                  isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`
              }
              onClick={handleLinkClick}
            >
              Live Streams
              {/* Display the close icon on active link in mobile view */}
              <span className={`md:hidden ${isOpen ? '' : 'hidden'}`}>
                <FaTimes
                  size={16}
                  className='inline ml-2 cursor-pointer'
                  onClick={handleLinkClick}
                />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/schedule'
              className={({ isActive }) =>
                `block p-4 text-white ${
                  isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`
              }
              onClick={handleLinkClick}
            >
              Schedules
              {/* Display the close icon on active link in mobile view */}
              <span className={`md:hidden ${isOpen ? '' : 'hidden'}`}>
                <FaTimes
                  size={16}
                  className='inline ml-2 cursor-pointer'
                  onClick={handleLinkClick}
                />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/results'
              className={({ isActive }) =>
                `block p-4 text-white ${
                  isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`
              }
              onClick={handleLinkClick}
            >
              Results
              {/* Display the close icon on active link in mobile view */}
              <span className={`md:hidden ${isOpen ? '' : 'hidden'}`}>
                <FaTimes
                  size={16}
                  className='inline ml-2 cursor-pointer'
                  onClick={handleLinkClick}
                />
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
