import React, { useContext } from 'react'
import {Link, useFetcher, useNavigate} from 'react-router-dom'
// import logo from '../assets/logo.png'

import toast from 'react-hot-toast';
import UserContext from '../context/userContext';

const Nav = () => {
  const {user} = useContext(UserContext);
  console.log(user);
  console.log(user.userName);
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
        { user.userName && <h2>{user.userName}</h2> }
        <button onClick={loggout} className={` ${ user.userName ? "flex" : "hidden"} px-2 py-1 bg-yellow-500 rounded-xl text-slate-200`}>LOGOUT</button>
        { !user.userName && <Link to='/'>LOGIN</Link> }
        
        
      </div>

    </nav>  
  )
}

export default Nav