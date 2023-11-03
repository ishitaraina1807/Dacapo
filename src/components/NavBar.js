import React, { useState } from 'react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="flex justify-between items-center">
        <h1 className="text-white custom-font text-2xl lg:text-5xl font-normal leading-normal">
          DACAPO
        </h1>
        <div className="hidden sm:flex items-center gap-11 text-lg lg:text-2xl text-white font-poppins font-semibold leading-normal hover:cursor-pointer">
          <p>Home</p>
          <p>Vetting process</p>
          <p className="text-black bg-[#CB5CFF] rounded-lg px-3 py-1 hover:text-white">
            Contact Us
          </p>
        </div>
        <div className="sm:hidden">
          <button
            className="text-white text-2xl md:text-3xl"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
        {menuOpen && (
          <div className="sm:hidden text-white font-poppins font-semibold">
            <p className="p-2 hover:bg-[#CB5CFF] cursor-pointer">
              Home
            </p>
            <p className="p-2 hover:bg-[#CB5CFF] cursor-pointer">
              Vetting process
            </p>
            <p
              className="p-2 hover:bg-[#CB5CFF] cursor-pointer"
            >
              Contact Us
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
