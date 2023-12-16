import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
// import logo from '../assets/logo.png'

import toast from 'react-hot-toast';

const Nav = () => {

  const navigate = useNavigate();
  const loggout = () => {
    toast.success('Logged Out successfuly!');
    localStorage.clear();
    navigate('/');
  }

  return ( 
    <nav className='z-50 fixed top-0 w-full flexBetween md:h-[10vh] h-[10vh] px-3 sm:px-10 sm:text-xl text-white bg-[#000] shadow-lg'>

      <div className='w-10 max-w-15'>
        {/* <img src={logo} alt="error" /> */}
        <h2 className='text-2xl sm:text-4xl font-black text-yellow-400'>Logo</h2>
      </div>

      <div className='flexBetween gap-4'>
        <h2>UserName</h2>
        <button onClick={loggout} className='px-2 py-1 bg-yellow-500 rounded-xl text-slate-200'>LOGOUT</button>
      </div>

    </nav>  
  )
}

export default Nav