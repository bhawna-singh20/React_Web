import React, { useState } from 'react';
import pic from "../../public/Hacker_logo.avif"; // Adjust path if needed
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [darkthemeon, setdarkthemeon] = useState(false);

  const navItem = [
    { id: 1, text: "Home", href: "#home" },
    { id: 2, text: "About", href: "#about" },
    { id: 3, text: "Experience", href: "#experience" },
    { id: 4, text: "Contact", href: "#contact" }
  ];

  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark')
    setdarkthemeon(!darkthemeon)
  }

  return (
      <div
        className={`dark:bg-black bg-white container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50`}
      >
        <div className='flex justify-between items-center h-16'>

          <div className='flex items-center space-x-2'>
            <img src={pic} className='h-12 w-12 rounded-full' alt="Logo" />
            <div className="flex flex-col">
              <h1 className='dark:text-white font-bold text-xl cursor-pointer'>Bhawna <span className='text-green-500'>Singh</span></h1>
              <p className='dark:text-yellow-400 text-sm'>Developer</p>
            </div>
          </div>

          <div className='flex gap-8 items-center'>
            <ul className='hidden md:flex space-x-8'>
              {navItem.map(({ id, text, href }) => (
                <li key={id} className={`dark:text-white hover:scale-105 duration-200 cursor-pointer`}>
                  <a href={href}>{text}</a>
                </li>
              ))}
            </ul>
            <div className='flex items-center space-x-2'>
              <button onClick={toggleTheme} className="dark:bg-white bg-gray-700 p-2 rounded-full">
                 {
                  darkthemeon ? (<FaSun className='text-black' />) : (<FaMoon className='text-white' />)
                 }
              </button>
              {/* <div onClick={() => setMenu(!menu)} className='md:hidden'>
                {menu ? <RxCross2 size={24} /> : <MdOutlineMenu size={24} />}
              </div> */}
            </div>
          </div>
          
        </div>
        {menu && (
          <div className={`md:hidden flex flex-col items-center justify-center space-y-4`}>
            <ul className="flex flex-col space-y-4">
              {navItem.map(({ id, text, href }) => (
                <li key={id} className={`hover:scale-105 duration-200 cursor-pointer ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                  <a href={href}>{text}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

  );
}

export default Navbar;