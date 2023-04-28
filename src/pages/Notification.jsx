import React from 'react'
import { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import bgNoti from "../assets/bg-noti.svg"
import img_income from "../assets/img-income.svg"
import img_outcome from "../assets/img-outcome.svg"
import img_cloud from "../assets/img-tranfer-pocket.png"
function Notification() {
    const data = [
        {
            st_id: {
                st_date: 11,
                st_status:[{type:"pocket", status: "income"}],
                st_amout: 500
            }
        }
    ]
  return (
    <div className="min-h-screen bg-[#F9F8F8]">
        <div className='h-full w-full flex justify-center'>
            <img src={bgNoti} className="w-full absolute" alt="" />
            <NavigationBar />
            <div className='w-full h-screen flex justify-center items-center'>
                <div className="relative flex flex-col bg-white w-[50%] pb-16 pt-8 rounded-[20px] shadow-king">
                    <div className='2xl:px-20 lg:px-8'>
                        <p className='font-jura text-[1.875vw]'>Notification</p>
                        <div className='h-1 w-[8rem] bg-[#07636B] rounded-[10px] ml-1'></div>
                    </div>
                    <div className='flex flex-col w-full mt-5'>
                        <div className='w-full flex justify-between items-center border-b-[1px] border-[#D9D9D9] py-5 pr-6 2xl:px-20 lg:px-8'>
                            <div className='flex items-center space-x-6'>
                                <img src={img_income} alt="" />
                                <div className='flex flex-col space-y-1'>
                                    <p className='text-[0.8203125vw] font-[700] text-[#243747] font-lexend'>Money Moved Successfully</p>
                                    <p className='text-[0.703125vw] font-[500] text-[#918F8F]'>Feb 14, 2023 18:42</p>
                                </div>
                            </div>
                            <p className='text-[1.25vw] text-[#07636B]'>+ 500.00</p>
                        </div>
                        <div className='w-full flex justify-between items-center  border-b-[1px] border-[#D9D9D9] py-5 pr-6 2xl:px-20 lg:px-8'>
                            <div className='flex items-center space-x-6'>
                                <img src={img_outcome} alt="" />
                                <div className='flex flex-col space-y-1'>
                                    <p className='text-[0.8203125vw] font-[700] text-[#243747] font-lexend'>Money Moved Successfully</p>
                                    <p className='text-[0.703125vw] font-[500] text-[#918F8F]'>Feb 14, 2023 18:42</p>
                                </div>
                            </div>
                            <p className='text-[1.25vw] text-[#C85952]'>- 500.00</p>
                        </div>
                    </div>
                    <div className=''></div>
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default Notification
 