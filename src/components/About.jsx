import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-custom-purple to-black text-white pt-20 pb-8 pl-14"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>
        <p className="text-xl mt-10 md:mt-20">
          I am Seema Saharan from Hisar, Haryana, currently pursuing my Master's
          in Computer Applications (MCA) from Maulana Azad National Institute of
          Technology (MANIT), Bhopal, with a CGPA of 8.44. I have a deep
          interest in frontend development and possess a strong knowledge of
          HTML, CSS, JavaScript, and React. Additionally, I have hands-on
          experience with backend development, having developed a full-stack
          project using the MERN stack (MongoDB, Express.js, React, Node.js). My
          programming skills are further demonstrated by my ability to solve
          Data Structures and Algorithms (DSA) problems in Java.
        </p>
        {showMore && (
          <p className="text-xl mt-10">
            My current goal is to work with a reputable company where I can
            enhance my skills through real-world projects. I am eager to apply
            my knowledge in a professional setting, contributing to innovative
            projects and growing as a developer. I am passionate about
            continuously learning and improving, and I am excited about the
            opportunities that lie ahead in my career.
          </p>
        )}
        <div className="flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 w-32 text-white px-4 py-2 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md hover:scale-105 duration-300"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
