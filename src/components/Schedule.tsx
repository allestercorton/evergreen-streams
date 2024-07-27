import React from 'react';

// interface Event {
//   id: number;
//   time: string;
//   title: string;
//   description: string;
// }

// const events: Event[] = [
//   {
//     id: 1,
//     time: '10:00 AM',
//     title: 'Practice Session 1',
//     description: 'Morning practice session with all teams.',
//   },
//   {
//     id: 2,
//     time: '2:00 PM',
//     title: 'Qualifying Round',
//     description: 'Drivers compete to set the best lap times.',
//   },
//   {
//     id: 3,
//     time: '4:00 PM',
//     title: 'Race Day',
//     description: 'The main race event of the day.',
//   },
//   {
//     id: 4,
//     time: '6:00 PM',
//     title: 'Post-Race Analysis',
//     description: 'Analysis and highlights of the race.',
//   },
// ];

const Schedule: React.FC = () => {
  return (
    <div className='container mx-auto p-4 sm:p-6'>
      <h2 className='text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white'>
        Race Schedule
      </h2>
      <div className='bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg'>
        <div className='overflow-x-auto'>
          <h1 className='text-2xl text-center'>Under development. Schedules Coming soon!</h1>
        </div>
      </div>
      {/* <div className='bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg'>
        {events.map((event) => (
          <div
            key={event.id}
            className='bg-gray-800 p-4 mb-4 rounded-lg shadow-md'
          >
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2'>
              <span className='text-yellow-400 font-semibold'>
                {event.time}
              </span>
              <span className='text-white font-bold mt-2 sm:mt-0'>
                {event.title}
              </span>
            </div>
            <p className='text-gray-300'>{event.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Schedule;
