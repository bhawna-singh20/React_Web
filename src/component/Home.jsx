import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaGit } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { TbSql } from 'react-icons/tb';
import { FaReact } from "react-icons/fa";

import { ReactTyped,Typed } from "react-typed";

import pic from "../../public/Hack.jpg";

function Home() {
  return (
    <div className='dark:bg-gray-800 dark:text-white bg-gray-100 container mx-auto px-4 min-h-screen md:px-20'>
      <div className='flex flex-col md:flex-row min-h-screen items-center justify-center'>
      <div className='md:w-1/2 order-2 md:order-1'>
        <span className='text-xl font-bold font-sans'>Welcome To My Feed</span>
        <div className='flex text-xl md:text-2xl mt-5'>
        <h1>Hello, I'm a 
        <span className='dark:text-yellow-400 text-green-600 font-bold ml-2'>
        <ReactTyped
          strings={["Develover", "Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </span>
        </h1>
        </div><br />
        <p className='text-sm md:text-md text-justify'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. Accusamus sint libero eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores corrupti! Sint quos, mollitia architecto 
        aliquam nesciunt, optio cum delectus sit voluptatum aut ratione quaerat veniam aperiam!</p><br />

        <p className='text-sm md:text-md text-justify'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. Accusamus sint libero eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores  sit voluptatum aut ratione quaerat veniam aperiam!</p>
        {/* social media icon */}
        <div className='mt-20 flex flex-col items-center md:flex-row justify-between'>
        <div>
          <h1 className='font-bold'>Available on</h1>
          <ul className='flex gap-4 mt-3'>
          <li>
          <a href="https://github.com/bhawna-singh20" target='_blank'> 
          <FaGit className='text-2xl cursor-pointer'/></a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bhawna-singh-9abb27197/" target='_blank'>
              <FaLinkedin className='text-2xl cursor-pointer'/></a>
          </li>
          <li>
          <a href="https://t.me/" target='_blank'>
            <FaTelegram className='text-2xl cursor-pointer'/></a>
          </li>
          
          </ul>
        </div>
        <div>
          <h1 className='font-bold'>Currently working on</h1>
          <ul className='flex gap-4 mt-3'>
          <li><SiSpringboot className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
          <li><DiJava className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
          <li><FaReact className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
          <li><TbSql className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>

          </ul>
        </div>
        </div>
      </div>
      <div className='md:w-1/2 order-1 flex justify-end'>
        <img src={pic} className="rounded-full md:w-[450px] md:h-[450px] w-[380px] h-[380px]" alt="" />
      </div>
      </div>
    </div>
    
  );
}

export default Home