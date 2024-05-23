import React from 'react'
import qrGenerator from '../assets/qr-generator.png'
import tour from '../assets/tour.png'
import toDoList from '../assets/to-do-list.png'
const Portfolio = () => {

    const portfolios =[
        {
            id:1,
            src:toDoList,
        },
        {
            id:2,
            src:tour,
        },
        {
            id:3,
            src:qrGenerator,
        },
        {
            id:4,
            src:qrGenerator,
        },
        {
            id:5,
            src:qrGenerator,
        },
    ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full py-10"> 
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"> 
        <div className="py-8 text-center md:text-left">
            <p className="text-4xl font-bold inline border-b-4 border-gray-400">
                Portfolio
            </p>
            <p className="py-6">Check my work here</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-8">

            {
                portfolios.map(({id, src}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-4 py-2 m-2 text-sm sm:text-base hover:scale-105 duration-200">Demo</button>
                            <button className="w-1/2 px-4 py-2 m-2 text-sm sm:text-base hover:scale-105 duration-200">Code</button>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
</div>

  )
}

export default Portfolio