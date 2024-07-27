import React, { useState } from 'react';

const VideoPlayer: React.FC = () => {
  const [currentSrc, setCurrentSrc] = useState(
    'https://redditsoccerstream.online/iframe/18.php?autoplay=1'
  );
  const [hasError, setHasError] = useState(false);
  const title = 'Formula 1 Live Stream';

  const servers = [
    {
      name: 'Server 1',
      src: 'https://redditsoccerstream.online/iframe/18.php?autoplay=1',
    },
    {
      name: 'Server 2',
      src: 'https://itssportstime.info/streams/f1-live.php?autoplay=1',
    },
    {
      name: 'Server 3',
      src: 'https://decmelfot.xyz/dec/dec10.php?autoplay=1',
    },
    {
      name: 'Server 4',
      src: 'https://web.primeradirectacanal.xyz/treat/well06/index.php?autoplay=1',
    },
  ];

  return (
    <div className='container mx-auto py-14 md:py-4 mt-16 max-w-4xl'>
      <div className='mb-4 text-center'>
        {servers.map((server, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSrc(server.src);
              setHasError(false); // Reset error state when changing server
            }}
            className={`mx-2 px-4 py-2 md:py-1 mb-3 md:mb-0 border rounded-md transition-colors duration-300 ease-in-out ${
              currentSrc === server.src
                ? 'bg-blue-600 text-white border-blue-700'
                : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
            }`}
          >
            {server.name}
          </button>
        ))}
      </div>
      <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
        {hasError ? (
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 text-white'>
            <p>Sorry, the video stream is currently unavailable.</p>
          </div>
        ) : (
          <iframe
            src={currentSrc}
            title={title}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='absolute top-0 left-0 w-full h-full'
            style={{ border: 'none' }}
            onError={() => setHasError(true)}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
