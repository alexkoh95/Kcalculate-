import React from 'react';
import { Link } from 'react-router-dom';

const SideNavBar = () => {
    return (
        <div className=" fixed h-screen w-60 bg-white bg-opacity-20 object-center">
            <div className='pt-12'> <h1 className='font-extrabold text-xl'><em>kcal</em>culate</h1> </div>
            
        <div className="pt-32 relative space-y-7 text-sm grid row-4 ">
           <div className='uppercase font-bold border-l-2 border-fuchsia-600'> <Link to='/'>Dashboard </Link> </div>
           <div className='uppercase font-bold'> <Link to='/log'> Log </Link></div>
           <div className='uppercase font-bold'> <Link to='/loghistory'>  Log History </Link> </div>
            <div className='uppercase font-bold'> <Link to='/settings'>  Settings </Link></div>
        </div>
  
        </div>
    )
} 

export default SideNavBar
