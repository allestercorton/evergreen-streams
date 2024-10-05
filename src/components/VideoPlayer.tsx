import { useState } from 'react';
import streams from '../data/streams.json';
import { ServerButton } from './ServerButton';
import { Stream } from '../types';

export function VideoPlayer() {
  const [currentSrc, setCurrentSrc] = useState(streams[0].src);
  const [hasError, setHasError] = useState(false);
  const title = 'Formula 1 Live Stream';

  return (
    <div className='bg-gray-800 shadow-xl rounded-lg overflow-hidden'>
      <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
        {hasError ? (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-900 text-white'>
            <p className='text-xl'>
              Sorry, the video stream is currently unavailable.
            </p>
          </div>
        ) : (
          <iframe
            src={currentSrc}
            title={title}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='absolute inset-0 w-full h-full'
            style={{ border: 'none' }}
            onError={() => setHasError(true)}
          ></iframe>
        )}
      </div>
      <div className='bg-gray-700 p-4'>
        <h2 className='text-2xl font-bold text-white mb-4'>Select Stream</h2>
        <div className='flex flex-wrap gap-4'>
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
      </div>
    </div>
  );
}
