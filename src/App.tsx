import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VideoPlayer from './components/VideoPlayer';
import UpcomingRaceDetails from './components/UpcomingRaceDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen bg-gray-900 text-gray-100 font-sans'>
        <Navbar />
        <main className='flex-grow'>
          <div className='text-center text-neutral-300 mt-[4.8rem] mb-[0.9rem] md:mb-0'>
            <p className='text-lg md:hidden'>
              Use Brave browser for a better experience.
            </p>
          </div>
          <div className='container mx-auto flex flex-col md:flex-row gap-6 px-4 py-1'>
            <div className='order-2 md:order-1 w-full md:w-1/3 lg:w-1/4'>
              <UpcomingRaceDetails />
            </div>
            <div className='order-1 md:order-2 w-full md:w-2/3 lg:w-3/4'>
              <Routes>
                <Route path='/' element={<VideoPlayer />} />
              </Routes>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
