import React from 'react'
import { useState, useEffect } from 'react'
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import bgAchievement from "../assets/bg-achievement.svg"
import $ from 'jquery';
import Loading from "../components/Loading"
import axios from 'axios'
import path from '../../path'
import plusAchieve from "../assets/icon8/btnPlusAchieve.svg"
import imgwater from '../assets/img-water.svg'

function Achievement() {
    const [user, setUser] = useState(null);
    const [percentage, setPersentage] = useState(0);
    const [balances, setBalance] = useState(0);
    const [water, setWater] = useState(0);
    const [cashbox, setCashbox] = useState(0);
    function renderloading(){
        $("#modal").fadeOut(500)
      }
    useEffect(()=>{
        axios.post(`${path}/getuser`, {
          user_id: parseInt(localStorage.getItem("user_id")),
        }).then((res)=>{
          try {
                let cash = 0;
                res.data.pocket.forEach((element) => {
                    cash += element.cloud_balance;
                    // console.log(balances);
                });
                // console.log(cash);
                setBalance(cash);
                setCashbox(res.data.cashbox.balance)
                let num = 0
                num = ((cash + res.data.cashbox.balance) - (cash + res.data.cashbox.balance) % 1000) / 1000
                setWater(num)
                setUser(res.data)
                renderloading()
            } catch (er) {
                console.log(er)
            }
            })
        },[])
        function watertheplant(){
            setPersentage(water + percentage)
            setWater(0)
        }
  return (
    <div className="h-screen bg-[#F9F8F8]">
        <div className='h-full w-full flex justify-center'>
        <div id="modal" className="w-full h-full absolute z-[100]">
      <Loading />
      </div>
            <img src={bgAchievement} className="w-full absolute" alt="" />
            <NavigationBar />
            <div className='w-full h-full flex justify-center items-center'>
                <div className="relative flex flex-col bg-white w-[55rem] h-[40rem] mt-10 rounded-[20px] shadow-king">
                    <div className='flex justify-between items-center border-b-2 px-14 2xl:pt-8 pt-6 pb-6'>
                        <p className='font-jura text-[1.6rem] font-medium'>Achievement</p>
                        <div className='w-[10rem] rounded-full box-shadow-3d flex bg-[#F3F3F3]'>
                            <img className='h-full' src={imgwater} alt="" />
                            <div className='flex items-center justify-center w-full pr-2'>
                                <p className='text-[1.0416666666666667vw] font-[500]'>{water}</p>
                            </div>
                            <img src={plusAchieve} className='pr-2' alt="" />
                        </div>
                    </div>
                    <div id='tree-bg' className='2xl:px-20 lg:px-8 py-5 flex flex-col items-center space-y-4'>
                        <p className='font-lexend text-[1.5rem] font-[400] text-[#385872]'>My plant</p>
                        <p className='text-[0.9375vw] text-[#C4C4C4] text-center font-[400]'>Every 1000 ฿ in your account. <br/>You will receive 1 water per month </p>
                        <div className='doughnut-bar'>
                            <div className='doughnut-bar-fill' style={{height: `${percentage}%`}}></div>
                            <div className="doughnut-bar-image"></div>
                        </div>
                        <p className='font-lexend text-[1.5rem] font-[400] text-[#385872]'>{percentage}/100</p>
                        <div onClick={()=>{watertheplant()}} className='py-2 px-8 rounded-[10px] bg-[#07636B] cursor-pointer'>
                            <p className='font-jura font-[700] text-[1.0416666666666667vw] text-white'>water the plant</p>
                        </div>
                        <div className='flex items-baseline space-x-2'>
                            <p className='text-[0.8333333333333334vw] text-[#C4C4C4]'>TREES PLANTED</p>
                            <p className='text-[1.25vw] text-[#A4B480]'>Total 6,100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default Achievement
 