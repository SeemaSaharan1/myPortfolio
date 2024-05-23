import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const NavBar = () => {

    const [nav,setNav] = useState(false);

   const links = [             // array of links for pages like home,contact
     {                          //Object has two element id and links
        id:1,
        link:'home'
     },
     {                          
        id:2,
        link:'about'
     },
     {                          
        id:3,
        link:'portfolio'
     },
     {                          
        id:4,
        link:'technologies'
     },
     {                          
        id:5,
        link:'contact'
     },

   ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black  px-4'>
        <h1 className='text-5xl font-signature ml-10'>Seema</h1> 


        <ul className='hidden md:flex '>                

            {links.map(({id,link})=>(                   // ({id,link}) This is the destructuring the link array 
                <li key={id}className=' px-6 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-150 '>
                    <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
            ))}
            
        </ul>


        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-2 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}


            
        {nav && (
             <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            
             {links.map(({id,link})=>(                   // ({id,link}) This is the destructuring the link array 
                 <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                     <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                     </li>
             ))} 
 
             </ul>
        )
        
    }
  
        </div>


    </div>
  )
}

export default NavBar