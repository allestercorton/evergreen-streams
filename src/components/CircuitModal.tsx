import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ModalProps } from '../types';

const CircuitModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageAlt,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed -inset-6 bg-black bg-opacity-75 flex items-center justify-center z-50'
      onClick={onClose}
      style={{ height: '100vh' }}
    >
      <div
        className='bg-gray-800 p-6 shadow-lg max-w-3xl mx-auto relative'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute top-4 right-4 text-gray-100 text-2xl'
          onClick={onClose}
        >
          <AiOutlineClose className='mr-5 md:mr-0' />
        </button>
        <img src={imageUrl} alt={imageAlt} className='rounded-lg' />
      </div>
    </div>
  );
};

export default CircuitModal;
