import React from 'react';

const LiveStream: React.FC = () => {
  // const streams = [
  //   { id: 1, name: 'Stream 1', url: 'https://example.com/stream1' },
  //   { id: 2, name: 'Stream 2', url: 'https://example.com/stream2' },
  //   { id: 3, name: 'Stream 3', url: 'https://example.com/stream3' },
  // ];

  return (
    <div className='container mx-auto p-4 sm:p-6'>
      <h2 className='text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white'>
        Race Schedule
      </h2>
      <div className='bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg'>
        <div className='overflow-x-auto'>
          <h1 className='text-2xl text-center'>
            Under development. Live Streams Coming soon!
          </h1>
        </div>
      </div>
      {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {streams.map((stream) => (
          <div
            key={stream.id}
            className='bg-gray-700 p-4 rounded-lg shadow-md flex flex-col justify-between'
          >
            <h3 className='text-lg sm:text-xl font-semibold mb-2'>
              {stream.name}
            </h3>
            <a
              href={stream.url}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-yellow-500 text-white text-center py-2 px-4 rounded hover:bg-yellow-600'
            >
              Watch Stream
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default LiveStream;
