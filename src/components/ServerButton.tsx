import { ServerButtonProps } from '../types';

export function ServerButton({
  name,
  src,
  currentSrc,
  setCurrentSrc,
  setHasError,
}: ServerButtonProps) {
  const isActive = currentSrc === src;

  return (
    <button
      onClick={() => {
        setCurrentSrc(src);
        setHasError(false);
      }}
      className={`px-4 py-2 rounded-full transition-colors duration-300 ease-in-out ${
        isActive
          ? 'bg-red-600 text-white'
          : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
      }`}
    >
      {name}
    </button>
  );
}
