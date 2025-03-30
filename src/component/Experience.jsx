import React from "react";

function Experience(){
    return(
        <div id='experience' className='dark:bg-gray-900 w-full px-4 py-8 md:px-20'>
        <h1 className='dark:text-white text-3xl font-bolder mb-4'>Work Experience</h1>
        <h1 className="text-green-600 font-semibold text-xl">
          Frontend Developer</h1>
          <span className='dark:text-white'>
          	[Worked 1 Year as frontend Developer]<br></br>
            [Developed and maintained responsive user interfaces for web applications using React]<br></br>
	        [Optimized website performance, resulting in a 20% reduction in page load time.]<br></br>
	        [Collaborated with designers and back-end developers to implement new features and improve user experience]<br></br>
	        [Utilized Git for version control and participated in code reviews]<br></br>

        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Backend Developer</h1>
          <span className='dark:text-white'>
            [I am working as Backend developer from last 2 Years]<br></br>
          	[Developing and maintaining web applications using Spring Boot]<br></br>
	        [Implementing RESTful APIs to facilitate communication between frontend and backend services]<br></br>
	        [Handling database integration, leveraging JPA, Hibernate, and SQL for data persistence]<br></br>
	        [Writing unit and integration tests with JUnit to ensure the application's reliability]<br></br>
	        [Collaborating in an Agile development environment, participating in sprint planning, daily stand-ups, and retrospective meetings]<br></br>

        </span>
        <br />
        <br />
        </div>
    )
}
export default Experience;