import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <main className='min-h-[90vh] flexCenter flex-col gap-5 text-2xl'>
    
    <h2 className=' text-red-500'>
      Error404!
    </h2>
    <Link className=' text-blue-500 hover:scale-125 transition-all' to="/">
      Back to home page → 
    </Link>
      
    </main>
  )
}

export default Error404