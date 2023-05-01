import React from 'react'
import { useState, useEffect } from 'react'
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import bgNoti from "../assets/bg-noti.svg"
import img_income from "../assets/img-income.svg"
import img_outcome from "../assets/img-outcome.svg"
import img_cloud from "../assets/img-tranfer-pocket.png"
import axios from 'axios'
import path from '../../path'
import moment from 'moment/moment'
function Notification() {
    const [statement, setStatement] = useState([]);
    
    useEffect(()=>{
        axios.post(`${path}/getUser`, {
          user_id: parseInt(localStorage.getItem("user_id")),
        }).then((res)=>{
          try {
                // console.log(res.data);
                let state = []
                res.data.pocket.forEach(element => {
                    state.push(...element.cloud_statement)
                    // setStatement(element.cloud_statement)
                    // console.log(element.cloud_statement);
                });
                // setStatement(state)
                var statement_sort = state.sort((a,b) => new Date(b[Object.keys(b)].st_date) - new Date(a[Object.keys(a)].st_date))
                console.log(statement_sort);
                setStatement(statement_sort)
                // console.log(statement);
                // console.log(state);
                // console.log(state[0][Object.keys(state[0])]);
                // console.log(moment("Wednesday 24 May 2002").format("LLLL"));
            } catch (er) {
                console.log(er)
            }
            })
        },[])
  return (
    <div className="min-h-screen bg-[#F9F8F8]">
        <div className='h-full w-full flex justify-center'>
            <img src={bgNoti} className="w-full absolute" alt="" />
            <NavigationBar />
            <div className='w-full h-screen flex justify-center items-center'>
                <div className="relative flex flex-col bg-white w-[50%] h-[75%] pb-16 pt-8 rounded-[20px] shadow-king">
                    <div className='2xl:px-20 lg:px-8'>
                        <p className='font-jura text-[1.875vw]'>Notification</p>
                        <div className='h-1 w-[8rem] bg-[#07636B] rounded-[10px] ml-1'></div>
                    </div>
                    <div className='flex flex-col w-full mt-5 overflow-y-scroll'>
                        {statement.map((res, index) => {
                            return (
                                <div key={index} className='w-full flex justify-between items-center border-b-[1px] border-[#D9D9D9] py-5 pr-6 2xl:px-20 lg:px-8'>
                            <div className='flex items-center space-x-6'>
                                {res[Object.keys(res)].st_status.status === "income"?
                                (<img src={img_income} alt="" />)
                                :(<img src={img_outcome} alt="" />)}
                                <div className='flex flex-col space-y-1'>
                                    <p className='text-[0.8203125vw] font-[700] text-[#243747] font-lexend'>Money Moved Successfully</p>
                                    <p className='text-[0.703125vw] font-[500] text-[#918F8F]'>{res[Object.keys(res)].st_date} 18:42</p>
                                </div>
                            </div>
                            {res[Object.keys(res)].st_status.status === "income"?
                            (<p className='text-[1.25vw] text-[#07636B]'>+ {res[Object.keys(res)].st_amount}</p>)
                            :(<p className='text-[1.25vw] text-[#C85952]'>- {res[Object.keys(res)].st_amount}</p>)
                            }
                        </div>
                            )
                        })}
                    </div>
                    <div className=''></div>
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default Notification
 