import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import airplane from "../assets/airplane.svg"
function SignIn() {
  return (
    <div id='bg-login' className="h-screen bg-[#DFF2E8]">
      <NavigationBar />    
      <div className='flex justify-center items-center h-full'>
        <div className='relative w-[35%] bg-white rounded-[15px] 2xl:px-20 lg:px-12 2xl:py-12 lg:py-8 shadow-king'>
            <img className='absolute w-[38rem] z-10 right-[-55%] top-[5%]' src={airplane} alt="" />
            <p className='text-[1.875vw] font-[500] font-jura'>Create Account</p>
            <div className='h-1 w-[6rem] bg-[#07636B] rounded-[10px] ml-1'></div>
            <form className='space-y-4 mt-7'>
                <input className='w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Name' type="text" />
                <input className='w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Nickname' type="text" />
                <input className='w-full text-[0.78125vw] h-[2.5vw] px-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Birthday' type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}/>
                <input className='w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Tel.' type="text" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} maxLength={10} required/>
                <input className='w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Email' type="email" />
                <input className='w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Password' type="password" />
                <input className='w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Confirm Password' type="password" />
                <div className='flex justify-center items-center mt-7 bg-[#07636B] rounded-[10px] p-3'>
                    <p className='text-white font-[500] text-[1.0416666666666667vw] font-jura'>SignUp</p>
                </div>
            </form>
            <div className='flex justify-center space-x-2 font-[500] text-[1.0416666666666667vw] mt-7 font-jura'>
                <p>Already have any account?</p>
                <Link to={"../signin"} className='text-[#07636B] cursor-pointer'>SIGN IN</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
 
export default SignIn
 