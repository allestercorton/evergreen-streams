import { Route, Routes } from 'react-router-dom';
import { VideoPlayer } from '../components/VideoPlayer';
import { UpcomingRaceDetails } from '../components/UpcomingRaceDetails';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen text-gray-100 font-sans'>
      <main className='flex-grow container mx-auto px-4 py-8'>
        <div className='text-center text-neutral-300 mb-6'>
          <p className='text-lg md:hidden'>
            Use Brave browser for a better experience.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          <div className='md:col-span-2 lg:col-span-3 order-1 md:order-2'>
            <Routes>
              <Route path='/' element={<VideoPlayer />} />
            </Routes>
          </div>
          <div className='md:col-span-1 order-2 md:order-1'>
            <UpcomingRaceDetails />
          </div>
        </div>
      </main>
    </div>
  );
}
