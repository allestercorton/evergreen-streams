import React from 'react';

// interface Result {
//   id: number;
//   position: number;
//   driver: string;
//   team: string;
//   time: string;
// }

// const results: Result[] = [
//   { id: 1, position: 1, driver: 'Driver 1', team: 'Team A', time: '1:32:45' },
//   { id: 2, position: 2, driver: 'Driver 2', team: 'Team B', time: '1:33:10' },
//   { id: 3, position: 3, driver: 'Driver 3', team: 'Team C', time: '1:33:45' },
//   { id: 4, position: 4, driver: 'Driver 4', team: 'Team D', time: '1:34:20' },
// ];

const Results: React.FC = () => {
  return (
    <div className='container mx-auto p-4 sm:p-6'>
      <h2 className='text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white'>
        Race Results
      </h2>
      <div className='bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg'>
        <div className='overflow-x-auto'>
          <h1 className='text-2xl text-center'>Under development. Results Coming soon!</h1>
          {/* <table className='w-full text-left text-gray-300'>
            <thead>
              <tr className='bg-gray-800'>
                <th className='p-2 sm:p-4'>Position</th>
                <th className='p-2 sm:p-4'>Driver</th>
                <th className='p-2 sm:p-4'>Team</th>
                <th className='p-2 sm:p-4'>Time</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.id} className='border-b border-gray-600'>
                  <td className='p-2 sm:p-4'>{result.position}</td>
                  <td className='p-2 sm:p-4'>{result.driver}</td>
                  <td className='p-2 sm:p-4'>{result.team}</td>
                  <td className='p-2 sm:p-4'>{result.time}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default Results;
