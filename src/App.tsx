import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VideoPlayer from './components/VideoPlayer';
import LiveStream from './components/LiveStream';
import Schedule from './components/Schedule';
import Results from './components/Results';

const App: React.FC = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
        <Navbar />
        <main className='flex-grow container mx-auto p-4'>
          <Routes>
            <Route path='/' element={<VideoPlayer />} />
            <Route path='/livestream' element={<LiveStream />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/results' element={<Results />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
