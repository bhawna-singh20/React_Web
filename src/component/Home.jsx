import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { BsTwitter } from 'react-icons/bs';
import { FaGit } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { TbSql } from 'react-icons/tb';
import { FaReact } from "react-icons/fa";

import { ReactTyped,Typed } from "react-typed";

function Home() {
  return (
      <div id='home' className='md:px-20 lg:py-0 py-12 sm:py-16 px-4 dark:bg-gray-800 dark:text-white bg-gray-100 w-full min-h-[calc(100vh-4rem)] flex flex-col gap-10 md:flex-row items-center justify-center'>
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
        A highly motivated and results-driven Java Developer with 2 years of experience specializing in building and maintaining Java-based web applications using Spring Boot. Proficient in full-stack development, object-oriented programming, and RESTful services. Skilled 
        in database integration, application performance optimization, and agile methodologies.</p><br />

        <p className='text-sm md:text-md text-justify'>
        As a software developer, I was responsible for both the development and maintenance of the microservice for the Royalty Submission portal. This portal allows vendors to submit royalties for merchandise they are authorized to sell. The application is built with Java and features a ReactJS frontend, hosted on AWS. My role focused on
        backend development, where I contributed to adding new features and resolving defects.</p>
        {/* social media icon */}
        <div className='mt-20 flex flex-col gap-10 items-center px-10 md:px-0 sm:flex-row justify-between'>
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
          <a href="https://x.com/BhawnaACsingh04" target='_blank'>
            <BsTwitter className='text-2xl cursor-pointer'/></a>
          </li>
          
          </ul>
        </div>
        <div>
          <h1 className='font-bold'>Currently working on</h1>
          <ul className='flex justify-center gap-4 mt-3'>
          <li><SiSpringboot className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
          <li><DiJava className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
          <li><FaReact className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
          <li><TbSql className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>

          </ul>
        </div>
        </div>
      </div>
      <div className='md:w-1/2 order-1 flex justify-end'>
        <img src="/Hack.jpg" className="rounded-full w-52 h-52 md:w-64 md:h-64" alt='photo'/>
      </div>
      </div>
    
  );
}

export default Home