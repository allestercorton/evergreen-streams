import React from 'react';
import { ServerButtonProps } from '../types';

const ServerButton: React.FC<ServerButtonProps> = ({
  name,
  src,
  currentSrc,
  setCurrentSrc,
  setHasError,
}) => {
  return (
    <button
      onClick={() => {
        setCurrentSrc(src);
        setHasError(false);
      }}
      className={`mx-2 px-4 py-2 mb-[1rem] border rounded-md transition-colors duration-300 ease-in-out ${
        currentSrc === src
          ? 'bg-blue-600 text-white border-blue-700'
          : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
      }`}
    >
      {name}
    </button>
  );
};

export default ServerButton;
