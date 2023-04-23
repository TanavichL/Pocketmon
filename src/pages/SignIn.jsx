import React from 'react'
import { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import airplane from "../assets/airplane.svg"
function SignIn() {
  return (
    <div id='bg-login' className="h-screen bg-[#E6F2FD]">
      <NavigationBar />    
      <div className='flex justify-center items-center h-full'>
        <div className='relative w-[50rem] h-[38rem] bg-white rounded-[15px] px-20 py-16 drop-shadow-xl'>
            <img className='absolute w-[38rem] z-10 right-[-20rem] top-[3rem]' src={airplane} alt="" />
            <p className='font-medium text-[40px]'>Hi, Welcome back!</p>
            <p className='text-[#C7C3C3] mt-1  text-[24px]'>Login to Pocketmon</p>
            <input className='mt-10 w-full h-[3rem] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]' placeholder='Email' type="text" />
            <input className='mt-6 w-full h-[3rem] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]' placeholder='Password' type="text" />
            <div className='w-full flex flex-col items-end mt-4 font-[700] text-[18px]'>
                <p className='text-[#7A7A7A] hover:text-[#07636B] duration-200 cursor-pointer'>Forgot my password</p>
            </div>
            <div className='flex justify-center items-center mt-7 bg-[#07636B] rounded-[10px] p-3 cursor-pointer'>
                <p className='text-white font-[500] text-[20px]'>SignIn</p>
            </div>
            <div className='flex justify-center space-x-2 font-[500] text-[20px] mt-14'>
                <p>Don’t have an account?</p>
                <p className='text-[#07636B] cursor-pointer'>SIGN UP</p>
            </div>
        </div>
      </div>
    </div>
  )
}
 
export default SignIn
 