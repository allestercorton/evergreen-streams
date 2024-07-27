const Navbar: React.FC = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav className='bg-gray-900 px-4 py-4 fixed w-full z-50 shadow-md'>
      <div className='container mx-auto flex items-center justify-center'>
        <button
          onClick={handleLogoClick}
          className='text-xl font-bold text-white focus:outline-none'
        >
          Formula 1 Live Streams
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
