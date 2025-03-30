import React from 'react'

function About() {
  return (
    <div id='about' className='dark:bg-gray-900 w-full px-4 py-8 md:px-20'>
        <h1 className='dark:text-white text-3xl font-bolder mb-4'>About</h1>
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span className='dark:text-white'>
          [MCA], [Magadh University], [2021-2023] <br></br>
          [BSc.IT],[Magadh University], [2017-2020]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span className='dark:text-white'>
        	Languages: Java, Spring, SpringBoot, ReactJs, MySql, jQuery, JavaScript.<br></br>
        	Developer Tools: Eclipse, IntelliJ , Git and GitHub, Postman .<br></br>
	        Technologies / Skills : Java 8, Spring Boot„ JUnit, Hibernate, JPA , Spring Microservices, SQL, Github, OOPS, AWS ,ReactJs, JavaScript, HTML,CSS.

        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span className='dark:text-white'>
          [Developer], [TCS], [may, 2022 to current] 
          
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span className='dark:text-white'>
          [TCS Gems], [Tata Consultancy Services], [2023] <br></br>
          [Appreciation Note],[2024]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Certificates
        </h1>
        <span className='dark:text-white'>
          AWS Cloud Practitioner, [2023] <br></br>
          Microsoft Azure AI Fundamental, [2024]
        </span>
        <br />
        <br />
    </div>
  )
}

export default About