import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

import toast from 'react-hot-toast';

// tailwind Css Classes
const formCssClasses = "shadow-2xl border-2 border-black mt-12 py-6 px-8 flex-col flex items-center gap-y-3 justify-center";
const inputCssClasses = "border-2 border-black p-2"

const baseURl = import.meta.env.VITE_BACKEND_BASE_URL;
const Register = () => {

  const navigate = useNavigate();
  const [input,setInput] = useState({
    userName:"",
    email:"",
    password:"",
    employmentType: 'full time',
    gender: 'male',
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
    // const {userName,email,password,employmentType,gender} = input;
    try{
        const x = await axios.post(`${baseURl}/api/v1/user/register`,input);
        if(x.data.success){
          toast.success('Registered successfuly.');
          navigate('/');
          setInput({
            userName:"",
            email:"",
            password:"",
            employmentType: 'full time',
            gender: 'male',
          })
        }
    }
    catch(err){
      console.log("error while register a new user → ", err)
    }
  };

  return (
    <main className='min-h-[90vh] flexCenter flex-col'>

      <form className={formCssClasses}
      onSubmit={submithandler}
      >

      <h2 className='font-bold text-xl my-2'>Register</h2>

      <input className={inputCssClasses} type="text" name='userName' value={input.userName} 
      onChange={handleChange} 
      placeholder='User Name' required
      />

      <input className={inputCssClasses} type="email" name='email' value={input.email} 
      onChange={handleChange} 
      placeholder='Email' required
      />


      <input className={inputCssClasses} type="password" name='password' value={input.password} 
      onChange={handleChange} 
      placeholder='Password' required
      />

      <select className={`w-[91%] ${inputCssClasses}`} name="employmentType" value={input.employmentType} onChange={handleChange}>
        <option value="full time">Full Time</option>
        <option value="part time">Part Time</option>
        <option value="daily wages">Daily Wages</option>
      </select>
  
      <select className={`w-[91%] ${inputCssClasses}`} name="gender" value={input.gender} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button className='my-3 bg-blue-500 p-2 rounded-xl font-bold hover:-translate-y-1 transition-all hover:scale-105'>Sign-Up</button>

      <div className='flex'>
        <h2>Already registered ?  
          <span className='hover:cursor-pointer text-blue-600 pl-2' 
          onClick={()=> navigate('/')} 
          > Login 
          </span>
        </h2>
      </div>

      </form>
    </main>
  )
}

export default Register