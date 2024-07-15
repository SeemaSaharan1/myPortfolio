import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import java from "../assets/java.png";

const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: node,
      title: "NODE.JS",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: java,
      title: "JAVA",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="technologies"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black py-20 pl-10"
    >
      <div className="mx-auto p-4 flex flex-col justify-center max-w-screen-lg w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6">These are the Technologies I worked on</p>
        </div>
        <div className="w-full grid text-center grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-12 sm:px-4">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
