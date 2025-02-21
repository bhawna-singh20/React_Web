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
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='texr-xl'>Welcome In My Feed</span>
        <div className='flex space-x-1 text-xl md:text-2xl'>
        <h1>Hello, I'm a</h1>
        {/* <span className='text-red-700 font-bold'>Developer</span> */}
        <ReactTyped
          className='text-red-700 font-bold'
          strings={["Develover", "Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div><br />
        <p className='text-sm md:text-md text-justify'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. Accusamus sint libero eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores corrupti! Sint quos, mollitia architecto 
        aliquam nesciunt, optio cum delectus sit voluptatum aut ratione quaerat veniam aperiam!</p><br />
        {/* social media icon */}
        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
        <div className='space-y-2'>
          <h1 className='font-bold'>Available on</h1>
          <ul className='flex space-x-5'>
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
        <div className='space-y-2'>
          <h1 className='font-bold'>Currently working on</h1>
          <ul className='flex space-x-5'>
          <li><SiSpringboot className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
          <li><DiJava className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
          <li><FaReact className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
          <li><TbSql className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>

          </ul>
        </div>
        </div>
      </div>
      <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8'>
        <img src={pic} className="rounded-full md:w-[450px] md:h-[450px] w-[380px] h-[380px]" alt="" />
      </div>
      </div>
    </div>
    
  );
}

export default Home