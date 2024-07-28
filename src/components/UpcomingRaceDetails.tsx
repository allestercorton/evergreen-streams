import React, { useState } from 'react';
import upcomingRace from '../data/f1_2024.json';
import { Race } from '../types';
import CircuitModal from './CircuitModal';

const UpcomingRaceDetails: React.FC = () => {
  const race: Race = upcomingRace[0];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sessions = [
    { name: 'race', ...race.sessions.race },
    { name: 'qualifying', ...race.sessions.qualifying },
    { name: 'practice3', ...race.sessions.practice3 },
    { name: 'practice2', ...race.sessions.practice2 },
    { name: 'practice1', ...race.sessions.practice1 },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='bg-gray-800 p-6 rounded-lg shadow-lg text-center md:text-left'>
      <h2 className='text-2xl font-bold mb-6'>Upcoming Race</h2>
      <h3 className='text-xl font-semibold text-yellow-400'>
        {race.grand_prix}
      </h3>
      <p className='text-gray-400'>{race.location}</p>
      <p className='text-gray-400 mb-4'>{race.date}</p>
      <div className='mt-4'>
        <h4 className='text-lg font-semibold mb-3'>Sessions</h4>
        {sessions.map((session, index) => (
          <div key={index} className='mb-2'>
            <p className='text-gray-400 capitalize'>{session.name}</p>
            <div className='text-gray-300'>
              <span>
                {new Date(session.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              <span className='ml-2'>{session.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-6'>
        <h4 className='text-lg font-semibold mb-3'>Circuit</h4>
        <p className='text-gray-300'>{race.circuit.name}</p>
        <p className='text-gray-300'>{`Length: ${race.circuit.length_km} km`}</p>
        <p className='text-gray-300'>{`Laps: ${race.circuit.number_of_laps}`}</p>
        <p className='text-gray-300'>{`Total Distance: ${race.circuit.total_distance_km} km`}</p>
        <div
          className='mt-4 rounded-lg shadow-md p-2 cursor-pointer bg-gray-700'
          onClick={openModal}
        >
          <img
            src={race.circuit.image_url}
            alt={`${race.circuit.name} Circuit`}
            className='rounded-lg'
          />
        </div>
      </div>

      <CircuitModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={race.circuit.image_url}
        imageAlt={`${race.circuit.name} Circuit`}
      />
    </div>
  );
};

export default UpcomingRaceDetails;
