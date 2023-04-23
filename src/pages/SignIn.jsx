import React from 'react'
import { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import airplane from "../assets/airplane.svg"
function SignIn() {
  return (
    <div id='bg-login' className="h-screen bg-[#DFF2E8]">
      <NavigationBar />    
      <div className='flex justify-center items-center h-full'>
        <div className='relative w-[33%] bg-white rounded-[15px] px-20 py-16 shadow-king'>
            <img className='absolute w-[26vw] z-10 right-[-22rem] top-[3rem]' src={airplane} alt="" />
            <p className='font-medium text-[1.5625vw] font-lexend'>Hi, Welcome back!</p>
            <p className='text-[#C7C3C3] mt-1 text-[0.9375vw] font-lexend'>Login to Pocketmon</p>
            <form className='lg:mt-5 2xl:mt-10' action="">
                <input className='w-full h-[3.7122969837587005vh] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none text-[0.78125vw]' placeholder='Email' type="email" />
                <input className='mt-6 w-full h-[3.7122969837587005vh] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none text-[0.78125vw]' placeholder='Password' type="password" />
            </form>
            <div className='w-full flex flex-col items-end mt-4 font-[700] text-[0.703125vw]'>
                <a href='' className='text-[#7A7A7A] hover:text-[#07636B] duration-200 font-jura'>Forgot my password</a>
            </div>
            <div className='flex justify-center items-center mt-7 bg-[#07636B] rounded-[10px] p-3 cursor-pointer'>
                <p className='text-white font-[500] text-[0.78125vw]'>SignIn</p>
            </div>
            <div className='flex justify-center space-x-2 font-[500] text-[0.78125vw] lg:mt-8 2xl:mt-14 font-jura'>
                <p>Don’t have an account?</p>
                <p className='text-[#07636B] cursor-pointer'>SIGN UP</p>
            </div>
        </div>
      </div>
    </div>
  )
}
 
export default SignIn
 