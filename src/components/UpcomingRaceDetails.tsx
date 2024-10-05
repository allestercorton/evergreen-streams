import { useState, useEffect } from 'react';
import axios from 'axios';
// import { CircuitModal } from './CircuitModal';

interface Session {
  date: string;
  time: string;
}

interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: {
    locality: string;
    country: string;
  };
}

interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: Session;
  SecondPractice: Session;
  ThirdPractice?: Session;
  Qualifying: Session;
  Sprint?: Session;
}

export function UpcomingRaceDetails() {
  const [nearestRace, setNearestRace] = useState<Race | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRaceData = async () => {
      try {
        const response = await axios.get(
          'http://ergast.com/api/f1/current.json'
        );
        const races: Race[] = response.data.MRData.RaceTable.Races;
        const currentDate = new Date();
        const upcomingRace = races.find(
          (race) => new Date(`${race.date}T${race.time}`) > currentDate
        );
        setNearestRace(upcomingRace || null);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch race data');
        setLoading(false);
      }
    };

    fetchRaceData();
  }, []);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  if (loading) {
    return (
      <div className='bg-gray-800 rounded-lg shadow-xl p-6 text-center'>
        <p className='text-2xl font-bold text-gray-300'>
          Loading race details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-gray-800 rounded-lg shadow-xl p-6 text-center'>
        <p className='text-2xl font-bold text-red-500'>{error}</p>
      </div>
    );
  }

  if (!nearestRace) {
    return (
      <div className='bg-gray-800 rounded-lg shadow-xl p-6 text-center'>
        <p className='text-2xl font-bold text-gray-300'>
          No upcoming races. Stay tuned!
        </p>
      </div>
    );
  }

  const formatDate = (dateString: string, timeString: string) => {
    const date = new Date(`${dateString}T${timeString}`);
    return {
      formattedDate: date
        .toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        .toUpperCase(),
      formattedTime: date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }),
    };
  };

  return (
    <div className='bg-gray-800 rounded-lg shadow-xl overflow-hidden'>
      <div className='bg-gray-700 p-6'>
        <h2 className='text-3xl font-bold text-white mb-2'>
          {nearestRace.raceName}
        </h2>
        <p className='text-xl text-gray-300'>{`${nearestRace.Circuit.Location.locality}, ${nearestRace.Circuit.Location.country}`}</p>
      </div>
      <div className='p-6 space-y-6'>
        <div>
          <h3 className='text-2xl font-semibold text-white mb-4'>Sessions</h3>
          <div className='space-y-3'>
            {Object.entries(nearestRace).map(([key, value]) => {
              if (
                key === 'FirstPractice' ||
                key === 'SecondPractice' ||
                key === 'ThirdPractice' ||
                key === 'Qualifying' ||
                key === 'Sprint'
              ) {
                const session = value as Session;
                const { formattedDate, formattedTime } = formatDate(
                  session.date,
                  session.time
                );
                return (
                  <div
                    key={key}
                    className='flex justify-between items-center bg-gray-700 rounded-lg p-3'
                  >
                    <p className='text-lg font-medium text-white capitalize'>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <div className='text-right'>
                      <span className='block text-sm text-gray-300'>
                        {formattedDate}
                      </span>
                      <span className='block text-sm font-semibold text-white'>
                        {formattedTime}
                      </span>
                    </div>
                  </div>
                );
              }
              return null;
            })}
            <div className='flex justify-between items-center bg-gray-700 rounded-lg p-3'>
              <p className='text-lg font-medium text-white capitalize'>Race</p>
              <div className='text-right'>
                <span className='block text-sm text-gray-300'>
                  {formatDate(nearestRace.date, nearestRace.time).formattedDate}
                </span>
                <span className='block text-sm font-semibold text-white'>
                  {formatDate(nearestRace.date, nearestRace.time).formattedTime}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-2xl font-semibold text-white mb-4'>
            Circuit Details
          </h3>
          <div className='space-y-2 text-gray-300'>
            <p>
              Name:{' '}
              <span className='text-white'>
                {nearestRace.Circuit.circuitName}
              </span>
            </p>
            <p>
              Location:{' '}
              <span className='text-white'>{`${nearestRace.Circuit.Location.locality}, ${nearestRace.Circuit.Location.country}`}</span>
            </p>
            <p>
              More Info:{' '}
              <a
                href={nearestRace.Circuit.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-300'
              >
                Circuit Details
              </a>
            </p>
          </div>
          {/* <div
            className='mt-4 cursor-pointer transition duration-300 transform hover:scale-105'
            onClick={openModal}
          >
            <img
              src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/${nearestRace.Circuit.circuitId}.png.transform/9col/image.png`}
              alt={`${nearestRace.Circuit.circuitName} Circuit`}
              className='rounded-lg w-full'
              title='Click to View Full Circuit Image'
            />
          </div> */}
        </div>
      </div>
      {/* <CircuitModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/${nearestRace.Circuit.circuitId}.png.transform/9col/image.png`}
        imageAlt={`${nearestRace.Circuit.circuitName} Circuit`}
      /> */}
    </div>
  );
}
