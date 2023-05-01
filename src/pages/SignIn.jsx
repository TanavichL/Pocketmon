import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import airplane from "../assets/airplane.svg"
import axios from "axios"
import path from "../../path";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();
  function login(){
    axios.post(`${path}/login`, {
      email: email,
      password: password,
    }).then((res) => {
      try{
        localStorage.setItem("user_id", res.data[0].user_id)
        router('/dashboard')
      }catch(er){
        console.log(er)
        alert('Incorrect Password')
      }
    })
    }
  return (
    <div id='bg-login' className="h-screen bg-[#DFF2E8]">
      <NavigationBar />
      <div className='flex justify-center items-center h-full'>
        <div className='relative w-[33%] bg-white rounded-[15px] 2xl:px-20 lg:px-10 2xl:py-16 lg:py-10 shadow-king'>
            <img className='absolute w-[26vw] z-10 right-[-50%] top-[9%]' src={airplane} alt="" />
            <p className='font-medium text-[1.5625vw] font-lexend'>Hi, Welcome back!</p>
            <p className='text-[#C7C3C3] mt-1 text-[0.9375vw] font-lexend'>Login to Pocketmon</p>
            <form className='lg:mt-5 2xl:mt-10' action="">
                <input className='w-full h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none text-[0.78125vw]' placeholder='Email' type="email" onChange={(e) =>{setEmail(e.target.value)}} />
                <input className='2xl:mt-6 lg:mt-4 w-full h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none text-[0.78125vw]' placeholder='Password' type="password" onChange={(e) => { setPassword(e.target.value)}} />
            </form>
            <div className='w-full flex flex-col items-end mt-4 font-[700] text-[0.703125vw]'>
                <Link to={'/forgot'} className='text-[#7A7A7A] hover:text-[#07636B] duration-200 font-jura'>Forgot my password</Link>
            </div>
            <button type='submit' onClick={login} className='w-full mt-7 bg-[#07636B] text-white font-[500] text-[0.78125vw] rounded-[10px] p-3 cursor-pointer'>
              SignIn
            </button>
            <Link to={"../signup"} className='flex justify-center space-x-2 font-[500] text-[1.0416666666666667vw] lg:mt-7 2xl:mt-14 font-jura'>
                <p>Don’t have an account?</p>
                <p className='text-[#07636B] cursor-pointer'>SIGN UP</p>
            </Link>
            <link rel="stylesheet" href="" />
        </div>
      </div>
    </div>
  )
}
 
export default SignIn
 