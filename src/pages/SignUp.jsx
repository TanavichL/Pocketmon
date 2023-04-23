import React from 'react'
import { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import airplane from "../assets/airplane.svg"
function SignIn() {
  return (
    <div id='bg-login' className="min-h-screen px-8 flex flex-col justify-center items-center bg-[#E6F2FD]">
      {/* <NavigationBar />     */}
      <div className='relative w-[50rem] h-[38rem] bg-white rounded-[15px] px-20 py-16 drop-shadow-xl'>
        <img className='absolute w-[38rem] z-10 right-[-20rem] top-[3rem]' src={airplane} alt="" />
        <input className='mt-10 w-full h-[3rem] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]' placeholder='Email' type="text" />
        <input className='mt-6 w-full h-[3rem] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]' placeholder='Password' type="text" />
        <div className='flex justify-center items-center mt-7 bg-[#07636B] rounded-[10px] p-3 cursor-pointer'>
            <p className='text-white font-[500] text-[20px]'>SignIn</p>
        </div>
        <div className='flex justify-center space-x-2 font-[500] text-[20px] mt-14'>
            <p>Don’t have an account?</p>
            <p className='text-[#07636B] cursor-pointer'>SIGN UP</p>
        </div>
      </div>
    </div>
  )
}
 
export default SignIn
 