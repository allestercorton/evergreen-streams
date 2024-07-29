import React, { useState } from 'react';
import schedule from '../data/2024_f1_schedules.json';
import CircuitModal from './CircuitModal';
import { RaceData } from '../types';

const UpcomingRaceDetails: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentDate = new Date();

  const parseTime = (date: string, time: string): Date => {
    const [hour, minute] = time.split(':').map(Number);
    const result = new Date(
      `${date}T${hour.toString().padStart(2, '0')}:${minute
        .toString()
        .padStart(2, '0')}:00Z`
    );
    result.setHours(result.getHours() + 8);
    return result;
  };

  const nearestRace = schedule.reduce(
    (nearest: RaceData | null, race: RaceData) => {
      const raceDate = race.sessions.race.date;
      const raceTime = race.sessions.race.time;

      const raceStartDateTime = parseTime(raceDate, raceTime);

      if (
        raceStartDateTime > currentDate &&
        (!nearest ||
          raceStartDateTime <
            parseTime(nearest.sessions.race.date, nearest.sessions.race.time))
      ) {
        return race;
      }

      return nearest;
    },
    null
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='text-center md:text-left flex flex-col p-6 space-y-6'>
      {nearestRace ? (
        <>
          <div>
            <h2 className='text-3xl font-extrabold mb-4 text-white'>
              Upcoming Race
            </h2>
            <h3 className='text-2xl font-bold text-yellow-400'>
              {nearestRace.grand_prix}
            </h3>
            <p className='text-gray-400 mb-4'>{nearestRace.location}</p>
          </div>
          <hr className='border-gray-700' />
          <div className='mb-6'>
            <h4 className='text-2xl font-semibold text-white mb-4'>Sessions</h4>
            <div className='space-y-4'>
              {Object.entries(nearestRace.sessions).map(
                ([sessionName, sessionData]) => {
                  const date = new Date(
                    `${sessionData.date}T${sessionData.time}`
                  );
                  const formattedDate = date
                    .toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })
                    .toUpperCase();
                  const formattedTime = date.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  });

                  return (
                    <div
                      key={sessionName}
                      className='flex flex-row justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md'
                    >
                      <p className='text-lg font-medium text-gray-300 capitalize mb-2 sm:mb-0'>
                        {sessionName}
                      </p>
                      <div className='text-gray-400 text-right'>
                        <span className='block text-sm sm:text-base'>
                          {formattedDate}
                        </span>
                        <span className='block text-sm sm:text-base'>
                          {formattedTime}
                        </span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <hr className='border-gray-700' />
          <div>
            <h4 className='text-xl font-semibold mb-3 text-white'>Circuit</h4>
            <p className='text-gray-300 mb-2'>{nearestRace.circuit.name}</p>
            <p className='text-gray-300 mb-2'>{`Length: ${nearestRace.circuit.length_km}`}</p>
            <p className='text-gray-300 mb-2'>{`Laps: ${nearestRace.circuit.number_of_laps}`}</p>
            <p className='text-gray-300'>{`Total Distance: ${nearestRace.circuit.total_distance_km}`}</p>
            <div
              className='mt-4 p-2 cursor-pointer transition duration-300 transform hover:scale-105'
              onClick={openModal}
            >
              <img
                title='Click to View Full Circuit Image'
                src={nearestRace.circuit.image_url}
                alt={`${nearestRace.circuit.name} Circuit`}
                className='rounded-lg w-full'
              />
            </div>
          </div>

          <CircuitModal
            isOpen={isModalOpen}
            onClose={closeModal}
            imageUrl={nearestRace.circuit.image_url}
            imageAlt={`${nearestRace.circuit.name} Circuit`}
          />
        </>
      ) : (
        <p className='text-gray-400 text-2xl font-bold md:pt-60'>
          No upcoming races. Stay tuned!
        </p>
      )}
    </div>
  );
};

export default UpcomingRaceDetails;
