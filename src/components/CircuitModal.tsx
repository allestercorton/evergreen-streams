interface CircuitModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
}

export function CircuitModal({
  isOpen,
  onClose,
  imageUrl,
  imageAlt,
}: CircuitModalProps) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-gray-800 p-4 rounded-lg max-w-3xl w-full'>
        <img
          src={imageUrl}
          alt={imageAlt}
          className='w-full h-auto rounded-lg'
        />
        <button
          onClick={onClose}
          className='mt-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300'
        >
          Close
        </button>
      </div>
    </div>
  );
}
