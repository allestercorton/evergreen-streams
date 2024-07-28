import React, { useState } from 'react';
import streams from '../data/streams.json';
import ServerButton from './ServerButton';
import { Stream } from '../types';

const VideoPlayer: React.FC = () => {
  const [currentSrc, setCurrentSrc] = useState(streams[0].src);
  const [hasError, setHasError] = useState(false);
  const title = 'Formula 1 Live Stream';

  return (
    <div className='rounded-lg shadow-md bg-gray-800 p-4'>
      <div className='mb-4 text-center'>
        {streams.map((server: Stream, index: number) => (
          <ServerButton
            key={index}
            name={server.name}
            src={server.src}
            currentSrc={currentSrc}
            setCurrentSrc={setCurrentSrc}
            setHasError={setHasError}
          />
        ))}
      </div>
      <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
        {hasError ? (
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 text-white'>
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
