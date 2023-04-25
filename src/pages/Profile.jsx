import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import bgProfile from "../assets/bg-profile.svg"

function Profile() {
  return (
    <div className="min-h-screen bg-[#F9F8F8]">
        <div className='h-full w-full flex justify-center'>
            <img src={bgProfile} className="w-full absolute" alt="" />
            <NavigationBar />
            <div className='w-full h-full flex justify-center items-center'>
                <div className="relative flex flex-col bg-white p-4 mt-[12rem] w-[50%] p-8 rounded-[20px] shadow-king">
                    <p className='font-jura text-[1.875vw]'>Profile</p>
                    <div className='h-1 w-[4rem] bg-[#07636B] rounded-[10px] ml-1'></div>
                    <div className='space-y-2 xl:px-14 px-10 mt-4'>
                        <p className='text-[1.0416666666666667vw] font-jura'>Name</p>
                        <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]'>
                            <p className='text-[#626060]'>Tanavich Laksana</p>
                        </div>
                        <p className='text-[1.0416666666666667vw] font-jura'>Nickname</p>
                        <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]'>
                            <p className='text-[#626060]'>Mind</p>
                        </div>
                        <p className='text-[1.0416666666666667vw] font-jura'>Password</p>
                        <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]'>
                            <p className='text-[#626060]'>1234</p>
                        </div>
                        <p className='text-[1.0416666666666667vw] font-jura'>Biethday</p>
                        <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]'>
                            <p className='text-[#626060]'>11/09/02</p>
                        </div>
                        <p className='text-[1.0416666666666667vw] font-jura'>Tel.</p>
                        <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]'>
                            <p className='text-[#626060]'>0909135284</p>
                        </div>
                        <p className='text-[1.0416666666666667vw] font-jura'>Email</p>
                        <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]'>
                            <p className='text-[#626060]'>63070077@kmitl.ac.th</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default Profile
 