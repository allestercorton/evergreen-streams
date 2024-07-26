import React from 'react';

const VideoPlayer: React.FC = () => {
  const src = 'https://redditsoccerstream.online/iframe/18.php';
  const title = 'Formula 1 Live Stream';

  return (
    <div className='container mx-auto p-4 mt-24 max-w-4xl'>
      <div className='relative pb-16/9'>
        <iframe
          src={src}
          title={title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='absolute top-0 left-0 w-full h-full'
          onError={(e) => console.error('Error loading iframe content:', e)}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
