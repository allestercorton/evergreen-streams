export function Footer() {
  return (
    <footer className='bg-gray-800 shadow-inner'>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-300 text-sm mb-4 md:mb-0'>
            &copy; {new Date().getFullYear()} F1 Streaming. All rights reserved.
          </p>
          <div className='flex space-x-4'>
            <a
              href='#'
              className='text-gray-300 hover:text-white transition duration-150 ease-in-out'
            >
              Privacy Policy
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-white transition duration-150 ease-in-out'
            >
              Terms of Service
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-white transition duration-150 ease-in-out'
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className='mt-4 text-center text-gray-400 text-xs'>
          Developed by EverGreen
        </div>
      </div>
    </footer>
  );
}
