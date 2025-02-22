import React from 'react'

function About() {
  return (
    <div className='dark:bg-gray-900 container mx-auto px-4 py-8 md:px-20'>
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
          Proficient in [Java, SiSpringboot, ReactJs] Experienced with [Software
          Tools/Technologies] Strong grasp of [Design Principles/Concepts]
          Excellent problem-solving skills Effective communicator and
          collaborator
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
          [TCS Gems], [Tata Consultancy Services], [2023] [Appreciation Note],[2024]
        </span>
        <br />
        <br />
    </div>
  )
}

export default About