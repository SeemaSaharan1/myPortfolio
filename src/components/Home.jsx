// Home Component
import React from "react";
import myImg from "../assets/resumePic.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-custom-purple pt-20 pl-12"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm A FULL STACK Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Currently, I'm pursuing my Masters in Computer Applications from
            MANIT, Bhopal. I have deep interest in Web Development using MERN
            Stack. I Love to be Happy :)
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="text-white group w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <FaCircleArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src={myImg}
            alt="my_profile"
            className="rounded-full transition-transform duration-500 hover:scale-105 mx-auto w-64 md:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
