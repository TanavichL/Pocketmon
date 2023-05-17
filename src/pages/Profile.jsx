import React from 'react'
import { useState, useEffect } from 'react'
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import bgProfile from "../assets/bg-profile.svg"
import $ from 'jquery';
import Loading from "../components/Loading"
import axios from 'axios'
import path from '../../path'
import moment from 'moment'

function Profile() {
    const [visible, setVisible] = useState(true);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    function renderloading(){
        $("#modal").fadeOut()
      }
    useEffect(()=>{
        axios.post(`${path}/getuser`, {
          user_id: parseInt(localStorage.getItem("user_id")),
        }).then((res)=>{
          try {
                console.log(res.data);
                setFirst(res.data.firstname)
                setLast(res.data.lastname)
                setPassword(res.data.password)
                setBirthday(res.data.user_date)
                setTel(res.data.tel)
                setEmail(res.data.email)
                renderloading()

            } catch (er) {
                console.log(er)
            }
            })
        },[])
    function CovertDate(date){
        var front = "";
        var mid = ""
        var back = "";
        front = date.slice(3, 5)
        mid = date.slice(0, 2)
        back = date.slice(6, 10)
        return moment(front+"-"+mid+"-"+back).format("LL");
    }
  return (
    <div className="min-h-screen bg-[#F9F8F8]">
        <div className='h-full w-full flex justify-center'>
            <img src={bgProfile} className="w-full absolute" alt="" />
            <div id="modal" className="w-full h-full absolute z-[100]">
      <Loading />
      </div>
            <NavigationBar />
            <div className='w-full h-screen flex justify-center items-center'>
                <div className="relative flex flex-col bg-white w-[50%] px-12 pt-8 pb-12 rounded-[20px] shadow-king">
                    <div className='flex justify-between items-center'>
                        <p className='font-jura text-[1.8rem] font-semibold'>Profile</p>
                    </div>
                    <div className='h-1 w-[3.5rem] bg-[#07636B] rounded-[10px]'></div>
                    <div className='space-y-2 px-10 mt-8'>
                        <p className='text-[1rem] font-medium font-jura'>Name</p>
                        <div className='flex items-center text-[0.78125vw] h-[2.5vw] pl-4 border border-[#5a5a5a] border-1 rounded-[10px] w-full'>
                            <p className='text-[#626060]'>{first} {last}</p>
                        </div>
                        <p className='text-[1rem] font-medium font-jura'>Password</p>
                        <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] px-4 border border-[#5a5a5a] border-1 rounded-[10px] justify-between'>
                            <div>
                                {visible && (<input value={password} type='password' disabled className='text-[#626060] select-none outline-none'></input>)}
                                {!visible && (<input value={password} type='text' disabled className='text-[#626060] select-none outline-none'></input>)}
                            </div>
                            {visible? (
                                <div onClick={() => {setVisible(!visible)}} className='h-1/2 flex items-center cursor-pointer'>
                                    <img className='h-full' src="./src/assets/view.png" alt="" />
                                </div>
                            ) : (
                                <div onClick={() => {setVisible(!visible)}} className='h-1/2 flex items-center cursor-pointer'>
                                    <img className='h-full' src="./src/assets/hide.png" alt="" />
                                </div>
                            ) }
                        </div>
                        <p className='text-[1rem] font-medium font-jura'>Birthday</p>
                        <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#5a5a5a] border-1 rounded-[10px]'>
                            <p className='text-[#626060]'>{CovertDate(birthday)}</p>
                        </div>
                        <p className='text-[1rem] font-medium font-jura'>Tel.</p>
                        <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#5a5a5a] border-1 rounded-[10px]'>
                            <p className='text-[#626060]'>{tel}</p>
                        </div>
                        <p className='text-[1rem] font-medium font-jura'>Email</p>
                        <div className='flex items-center w-full text-[0.78125vw] h-[2.5vw] pl-4 border border-[#5a5a5a] border-1 rounded-[10px]'>
                            <p className='text-[#626060]'>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default Profile
 