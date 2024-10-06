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
    <div className='text-center md:text-left flex flex-col py-6 space-y-6 md:bg-gray-800 md:rounded-lg md:shadow-md md:p-5'>
      {nearestRace ? (
        <>
          <div>
            <h2 className='text-3xl font-bold md:font-extrabold mb-4 text-teal-300'>
              Upcoming Race
            </h2>
            <h3 className='text-2xl font-bold text-gray-200'>
              {nearestRace.grand_prix}
            </h3>
            <p className='text-gray-400 mb-4'>{nearestRace.location}</p>
          </div>
          <hr className='border-gray-700' />
          <div className='mb-6'>
            <h4 className='text-2xl font-semibold text-teal-300 mb-4'>
              Sessions
            </h4>
            <div className='space-y-4'>
              {Object.entries(nearestRace.sessions).map(
                ([sessionName, sessionData]) => {
                  if (!sessionData) return null;

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
                      className='flex flex-row justify-between items-center p-4 md:p-0 bg-gray-800 md:bg-none rounded-lg md:rounded-none shadow-md md:shadow-none'
                    >
                      <p className='text-lg font-medium text-gray-200 capitalize mb-2 sm:mb-0'>
                        {sessionName}
                      </p>
                      <div className='text-gray-400 text-right'>
                        <span className='block text-sm sm:text-base text-neutral-400'>
                          {formattedDate}
                        </span>
                        <span className='block text-sm sm:text-base text-white'>
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
            <h4 className='text-xl font-semibold mb-3 text-teal-300'>
              Circuit
            </h4>
            <p className='text-neutral-400 mb-2'>
              Circuit:{' '}
              <span className='text-gray-200'>{nearestRace.circuit.name}</span>
            </p>
            <p className='text-neutral-400 mb-2'>
              Length:{' '}
              <span className='text-gray-200'>
                {nearestRace.circuit.length_km}
              </span>
            </p>
            <p className='text-neutral-400 mb-2'>
              Laps:{' '}
              <span className='text-gray-200'>
                {nearestRace.circuit.number_of_laps}
              </span>
            </p>
            <p className='text-neutral-400 mb-2'>
              Total Distance:{' '}
              <span className='text-gray-200'>
                {nearestRace.circuit.total_distance_km}
              </span>
            </p>
            <p className='text-neutral-400'>
              LR:{' '}
              <span className='text-gray-200'>
                {nearestRace.circuit.lap_record}
              </span>
            </p>
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
