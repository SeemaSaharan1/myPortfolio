import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white min-h-screen py-8'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>
        I am Seema Saharan from Hisar, Haryana, currently pursuing my Master's in Computer Applications (MCA) from Maulana Azad National Institute of Technology (MANIT), Bhopal, with a CGPA of 8.44. I have a deep interest in frontend development and possess a strong knowledge of HTML, CSS, JavaScript, and React. Additionally, I have hands-on experience with backend development, having developed a full-stack project using the MERN stack (MongoDB, Express.js, React, Node.js). My programming skills are further demonstrated by my ability to solve Data Structures and Algorithms (DSA) problems in Java.
        </p>
        <br/>

        <p className='text-xl'>
        My current goal is to work with a reputable company where I can enhance my skills through real-world projects. I am eager to apply my knowledge in a professional setting, contributing to innovative projects and growing as a developer. I am passionate about continuously learning and improving, and I am excited about the opportunities that lie ahead in my career.
        </p>
      </div>
    </div>
  )
}

export default About