import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import $ from 'jquery';
import Loading from "../components/Loading"

import "../css/styles.css"
import airplane from "../assets/airplane.svg"
import axios from "axios"
import path from "../../path";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [birth, setBirth] = useState();
  const [tel, setTel] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [validate, setValidate] = useState(false);
  const router = useNavigate();
  function renderloading(){
    $("#modal").fadeOut()
  }
  setTimeout(renderloading, 500)
  function signupForm(){
    setValidate(false)
    if (password != confirm){
      setValidate(true)
      alert("password and confirm password incorrect")
    }else{
    axios.post(`${path}/adduser`, {
      firstname: firstname,
      lastname: surname,  
      user_date: birth,
      tel: tel,
      email: email,
      password: password,
      imgProfile: ""
    }).then((res) => {
      alert(res.data)
      if (res.data == "successfully"){
        router('/signin')
      }
    })
    }
  }
  return (
    <div id='bg-login' className="h-screen bg-[#DFF2E8]">
      <div id="modal" className="w-full h-full absolute z-[100]">
      <Loading />
      </div>
      <NavigationBar />    
      <div className='flex justify-center items-center h-full'>
        <div className='relative w-[35%] bg-white mt-4 rounded-[15px] px-14 py-9 shadow-king'>
            <img className='absolute w-[30rem] z-10 2xl:right-[-55%] right-[-65%] 2xl:top-[5%] top-[3%]' src={airplane} alt="" />
            <p className='text-[1.875vw] font-[500] font-jura'>Create Account</p>
            <div className='h-1 w-[6rem] bg-[#07636B] rounded-[10px] ml-1'></div>
            <form className='space-y-5 mt-7'>
                <input onChange={(e) => setFirstname(e.target.value)} className='w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Firstname' type="text" />
                <input onChange={(e) => setSurname(e.target.value)} className='w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Lastname' type="text" />
                <input onChange={(e) => setBirth(e.target.value)} className='w-full text-[0.78125vw] h-[2.5vw] px-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Birthday' type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}/>
                <input onChange={(e) => setTel(e.target.value)} className='w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Tel.' type="text" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} maxLength={10} required/>
                <input onChange={(e) => setEmail(e.target.value)} className='w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Email' type="email" />
                <input onChange={(e) => setPassword(e.target.value)} className='w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Password' type="password" />
                <input onChange={(e) => setConfirm(e.target.value)} className='w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] outline-none' placeholder='Confirm Password' type="password" />
                <div onClick={signupForm} className='flex justify-center items-center bg-[#07636B] rounded-[10px] p-2.5 cursor-pointer'>
                    <p className='text-white font-[500] text-[0.88125vw]'>SignUp</p>
                </div>
            </form>
            <div className='flex justify-center space-x-2 font-[500] text-[1.0416666666666667vw] mt-5 font-jura'>
                <p>Already have any account?</p>
                <Link to={"../signin"} className='text-[#07636B] cursor-pointer'>SIGN IN</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
 
export default SignUp
 