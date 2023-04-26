import React from 'react'
import { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import bgProfile from "../assets/bg-profile.svg"

function Profile() {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState("Tanavich Laksana");
    const [nickname, setNickname] = useState("Mind");
    const [password, setPassword] = useState("1234");
    const [birthday, setbirthday] = useState("11/09/02");
    const [tel, setTel] = useState("0909135284");
    const [email, setEmail] = useState("63070077@gmail.ac.th");

  return (
    <div className="min-h-screen bg-[#F9F8F8]">
        <div className='h-full w-full flex justify-center'>
            <img src={bgProfile} className="w-full absolute" alt="" />
            <NavigationBar />
            <div className='w-full h-screen flex justify-center items-center'>
                {!edit ? (
                    <div className="relative flex flex-col bg-white w-[50%] 2xl:px-20 lg:px-8 py-12 rounded-[20px] shadow-king">
                        <div className='flex justify-between items-center'>
                            <p className='font-jura text-[1.875vw]'>Profile</p>
                            <div onClick={() => setEdit(!edit)} className='p-3 bg-[#07636B] text-white rounded-[10px] w-[10%] flex justify-center items-center cursor-pointer select-none'>Edit</div>
                        </div>
                        <div className='h-1 w-[4rem] bg-[#07636B] rounded-[10px] ml-1'></div>
                        <div className='space-y-2 xl:px-14 px-10 mt-8'>
                            <div className='flex w-full space-x-5'>
                                <div className='w-[50%]'>
                                    <p className='text-[1.0416666666666667vw] font-jura'>Name</p>
                                    <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#5a5a5a] border-1 rounded-[10px] w-[50%]'>
                                        <p className='text-[#626060]'>{name}</p>
                                    </div>
                                </div>
                                <div className='w-[50%]'>
                                    <p className='text-[1.0416666666666667vw] font-jura'>Nickname</p>
                                    <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#5a5a5a] border-1 rounded-[10px]'>
                                        <p className='text-[#626060]'>{nickname}</p>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[1.0416666666666667vw] font-jura'>Password</p>
                            <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#5a5a5a] border-1 rounded-[10px]'>
                                <input value={password} type='password' disabled className='text-[#626060] select-none outline-none'></input>
                            </div>
                            <p className='text-[1.0416666666666667vw] font-jura'>Birthday</p>
                            <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#5a5a5a] border-1 rounded-[10px]'>
                                <p className='text-[#626060]'>{birthday}</p>
                            </div>
                            <p className='text-[1.0416666666666667vw] font-jura'>Tel.</p>
                            <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#5a5a5a] border-1 rounded-[10px]'>
                                <p className='text-[#626060]'>{tel}</p>
                            </div>
                            <p className='text-[1.0416666666666667vw] font-jura'>Email</p>
                            <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#5a5a5a] border-1 rounded-[10px]'>
                                <p className='text-[#626060]'>{email}</p>
                            </div>
                        </div>
                    </div>)
                : (<div className="relative flex flex-col bg-white w-[50%] 2xl:px-20 lg:px-8 py-12 rounded-[20px] shadow-king">
                    <div className='flex justify-between items-center'>
                        <p className='font-jura text-[1.875vw]'>Edit Profile</p>
                        <div className='flex space-x-2'>
                            <div onClick={() => setEdit(!edit)} className='p-3 bg-[#07636B] text-white rounded-[10px] flex justify-center items-center cursor-pointer select-none'>Update</div>
                            <div onClick={() => setEdit(!edit)} className='p-3 bg-red-600 text-white rounded-[10px] flex justify-center items-center cursor-pointer select-none'>Cancel</div>
                        </div>
                    </div>
                    <div className='h-1 w-[4rem] bg-[#07636B] rounded-[10px] ml-1'></div>
                    <div className='space-y-2 xl:px-14 px-10 mt-8'>
                            <div className='flex w-full space-x-5'>
                                <div className='w-[50%]'>
                                    <p className='text-[1.0416666666666667vw] font-jura text-[#B4B4B4]'>Name</p>
                                    <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px] w-[50%]'>
                                        <p className='text-[#B4B4B4]'>{name}</p>
                                    </div>
                                </div>
                                <div className='w-[50%]'>
                                    <p className='text-[1.0416666666666667vw] font-jura'>Nickname</p>
                                    <input value={nickname} onChange={(e) => setNickname(e.target.value)} className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#5a5a5a] border-1 rounded-[10px] outline-none' type="text" />
                                </div>
                            </div>
                            <p className='text-[1.0416666666666667vw] font-jura text-[#B4B4B4]'>Password</p>
                            <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]'>
                                <input value={password} type='password' disabled className='text-[#B4B4B4] outline-none select-none'></input>
                            </div>
                            <p className='text-[1.0416666666666667vw] font-jura text-[#B4B4B4]'>Birthday</p>
                            <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]'>
                                <p className='text-[#B4B4B4]'>{birthday}</p>
                            </div>
                            <p className='text-[1.0416666666666667vw] font-jura text-[#B4B4B4]'>Tel.</p>
                            <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]'>
                                <p className='text-[#B4B4B4]'>{tel}</p>
                            </div>
                            <p className='text-[1.0416666666666667vw] font-jura text-[#B4B4B4]'>Email</p>
                            <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#B4B4B4] border-1 rounded-[10px]'>
                                <p className='text-[#B4B4B4]'>{email}</p>
                            </div>
                        </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}
 
export default Profile
 