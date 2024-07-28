import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VideoPlayer from './components/VideoPlayer';
import UpcomingRaceDetails from './components/UpcomingRaceDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen bg-gray-900 text-gray-100'>
        <Navbar />
        <main className='flex-grow container mx-auto flex flex-col md:flex-row mt-[3rem] p-4'>
          <div className='order-2 md:order-1 w-full md:w-1/4 p-4'>
            <UpcomingRaceDetails />
          </div>
          <div className='order-1 md:order-2 w-full md:w-3/4 p-4'>
            <Routes>
              <Route path='/' element={<VideoPlayer />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
