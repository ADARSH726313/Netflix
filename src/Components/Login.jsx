import React from 'react'
import Header from './Header'
import { useState } from 'react'


function Login() {

  const [change,setchange] = useState(true)

  const handlechange = ()=>  {

    setchange(!change);

  }
  return (
    <>
    <Header/>
    <div className='relative'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt=' logo of netflix ' />
    </div>


<form className=' bg-black top-20 absolute h-4/6 w-1/4  rounded-lg m-auto right-0 left-0  mt-8 text-2xl bg-opacity-60 ' action="">

  <h1 className=' font-bold text-white text-2xl text-center m-3'> {change?" Sign In" : " Register"} </h1>
  {!change && <input className='p-2  m-5 mt-4  text-gray-400 bg-gray-700' type="text" placeholder='name'  /> }
  <input className='p-2  m-5  mt-4   text-gray-400 bg-gray-700' type="text" placeholder='email'  />
  <input  className='p-2 m-5 mt-4   text-gray-400  bg-gray-700 ' type="password" placeholder='password'  />
  <button className=' p-2 mt-2 ml-6 text-white text-2xl bg-red-600 w-4/5'>  Sign In  </button>

  <p className=' text-white mt-4 cursor-pointer text-lg text-center'> new to Netflix ? <b onClick={handlechange} >  Sign up now</b></p>
</form>
   
    </>
  )
}

export default Login