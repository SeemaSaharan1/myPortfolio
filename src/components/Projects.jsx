import React from "react";
import qrGenerator from "../assets/qr-generator.png";
import tour from "../assets/tour.png";
import toDoList from "../assets/to-do-list.png";
import swadesi from "../assets/Swadesi-Bazar.png";
import blogging from "../assets/blogging.png";
import news from "../assets/news.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: swadesi,
      demoLink: "https://myfirstapp-4cb12.web.app/",
      codeLink: "https://myfirstapp-4cb12.web.app/",
      title: "Swadesi Bazar",
    },
    {
      id: 2,
      src: tour,
      demoLink: "https://seemasaharan1.github.io/travelling-project/",
      codeLink: "https://github.com/SeemaSaharan1/travelling-project",
      title: "Haryana Toursim",
    },
    {
      id: 3,
      src: qrGenerator,
      demoLink: "https://seemasaharan1.github.io/QR-Generator/",
      codeLink: "https://github.com/SeemaSaharan1/QR-Generator",
      title: "QR Generator",
    },
    {
      id: 4,
      src: toDoList,
      demoLink: "https://seemasaharan1.github.io/to-do-list/",
      codeLink: "https://github.com/SeemaSaharan1/to-do-list",
      title: "To-Do List",
    },
    {
      id: 5,
      src: blogging,
      demoLink: "https://demo-link-for-qrgenerator3.com",
      codeLink: "https://github.com/yourusername/qrgenerator3",
      title: "Creative Hub",
    },
    {
      id: 6,
      src: news,
      demoLink: "https://demo-link-for-qrgenerator3.com",
      codeLink: "https://github.com/SeemaSaharan1/NEWS-Web/tree/main",
      title: "NEWS-MAZ",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="py-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            My Projects
          </p>
          <p className="py-6">Check my work here</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-8">
          {projects.map(({ id, src, demoLink, codeLink, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h2 className="text-xl font-semibold text-center py-2">
                {title}
              </h2>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-4 py-2 m-2 text-sm sm:text-base hover:scale-105 duration-200 text-center bg-blue-600 text-white rounded-md"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-4 py-2 m-2 text-sm sm:text-base hover:scale-105 duration-200 text-center bg-custom-purple text-white rounded-md"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
