import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import UserContext from '../context/userContext';

import toast from 'react-hot-toast';

const baseURl = import.meta.env.VITE_BACKEND_BASE_URL;
const Login = () => {

  const {setUser} = useContext(UserContext);

  const navigate = useNavigate();
  const [input,setInput] = useState({
    userName:"root",
    password:"123"
  })
  const handleChange = (e) => {
    const {name,value} = e.target;
    setInput(prevState => ({
      ...prevState,
      [name]:value 
    }));
  }
  const submithandler = async (e) => {
    e.preventDefault();
    try{
      const x = await axios.post(`${baseURl}/api/v1/user/login`, input);
      // console.log(x.data.user);
      const y = x.data.user;
      console.log(y);
      if(x.data.success){
        setUser(y);
        localStorage.setItem("userId",x?.data?.user._id);
        toast.success('Logged in successfuly.');
        navigate('/dashboard');
      }
      if(!x.data.success){
        toast.error('Incorrect User Name or password.');
      }
    }
    catch(err){
      console.log("Error in submit handler function (login) ",err);
    }
  }

  return (
    <main className='min-h-[90vh] flexCenter flex-col'>

      <form className=' shadow-2xl border-2 border-black mt-12 p-6 flex-col flex items-center gap-y-3 justify-center' action="" 
      onSubmit={submithandler}
      >

      <h2 className='font-bold text-xl my-2'>LOGIN</h2>

      <input className='border-2 border-black p-2 ' type="text" name='userName' value={input.userName} 
      onChange={handleChange} 
      placeholder='User Name' required
      />
      <input className='border-2 border-black p-2 ' type="password" name='password' value={input.password} 
      onChange={handleChange} 
      placeholder='Password' required
      />

      <button className='my-3 bg-blue-500 p-2 rounded-xl font-bold hover:-translate-y-1 transition-all hover:scale-105' type='submit'>Login</button>
      
      <div className='flex'>
        <h2>Ner user ?  
          <span className='hover:cursor-pointer text-blue-600 pl-2' 
          onClick={()=> navigate('/register')} 
          > Sign-Up 
          </span>
        </h2>
      </div>

      </form>

      <div className='mt-3 flex gap-8 text-slate-400'>

      <h2>Take User Name → root</h2>
      <h2>Password → 123</h2>
      </div>
    </main>
  )
}

export default Login