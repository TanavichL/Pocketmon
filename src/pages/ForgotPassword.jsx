import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import airplane from "../assets/airplane.svg"
import axios from "axios"
import path from "../../path";
export default function ResetPass() {
  return (
    <div id='bg-login' className="h-screen bg-[#DFF2E8]">
      <NavigationBar />
      <div className='flex justify-center items-center h-full'>
        <div className='relative w-[33%] bg-white rounded-[15px] 2xl:px-20 lg:px-10 2xl:py-16 lg:py-10 shadow-king'>
            <img className='absolute w-[26vw] z-10 right-[-50%] top-[9%]' src={airplane} alt="" />
            <p className='font-medium text-[1.5625vw] font-lexend'>Reset Password</p>
            <p className='text-[#C7C3C3] mt-1 text-[0.9375vw] font-lexend'>Enter your new password</p>
            <form className='lg:mt-5 2xl:mt-10' action="">
                <input className='w-full h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none text-[0.78125vw]' placeholder='Email' type="email" onChange={(e) =>{setEmail(e.target.value)}} />
                <input className='2xl:mt-6 lg:mt-4 w-full h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none text-[0.78125vw]' placeholder='Password' type="password" onChange={(e) => { setPassword(e.target.value)}} />
                <input className='2xl:mt-6 lg:mt-4 w-full h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none text-[0.78125vw]' placeholder='Confirm Password' type="password" onChange={(e) => { setPassword(e.target.value)}} />
            </form>
            
            <button type='submit' className='w-full mt-7 bg-[#07636B] text-white font-[500] text-[0.78125vw] rounded-[10px] p-3 cursor-pointer'>
            RESET PASSWORD
            </button>
            <Link to={"../signin"} className='flex justify-center space-x-2 font-[500] text-[1.0416666666666667vw] lg:mt-7 2xl:mt-14 font-jura'>
                <p>Change your mind?</p>
                <p className='text-[#07636B] cursor-pointer'>SIGN IN</p>
            </Link>
            <link rel="stylesheet" href="" />
        </div>
      </div>
    </div>
  )
}