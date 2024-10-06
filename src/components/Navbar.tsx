import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-gray-800 shadow-lg'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <NavLink to='/' className='flex items-center space-x-3'>
            <svg
              className='w-8 h-8 text-red-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span className='text-xl font-bold text-white'>F1 Live Stream</span>
          </NavLink>

          {/* Desktop links */}
          <div className='hidden md:flex space-x-4'>
            <NavLink
              to='/schedule'
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white transition duration-150 ease-in-out'
              }
            >
              Schedule
            </NavLink>
            <NavLink
              to='/standings'
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white transition duration-150 ease-in-out'
              }
            >
              Standings
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-white focus:outline-none'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <NavLink
              to='/schedule'
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? 'block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-700'
                  : 'block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out'
              }
            >
              Schedule
            </NavLink>
            <NavLink
              to='/standings'
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? 'block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-700'
                  : 'block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out'
              }
            >
              Standings
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
