import React from 'react'
import { useState, useEffect } from 'react'
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import bgNoti from "../assets/bg-noti.svg"
import img_income from "../assets/img-income.svg"
import img_outcome from "../assets/img-outcome.svg"
import $ from 'jquery';
import Loading from "../components/Loading"
import axios from 'axios'
import path from '../../path'
import moment from 'moment/moment'
function Notification() {
    const [statement, setStatement] = useState([]);
    function renderloading(){
        $("#modal").fadeOut()
      }
    useEffect(()=>{
        axios.post(`${path}/getuser`, {
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
                let state2 = []
                state2.push(...res.data.cashbox.statement);
                console.log(res.data.cashbox);
                state.push(...state2)
                // setStatement(state)
                var statement_sort = state.sort((a,b) => new Date(b[Object.keys(b)].st_date) - new Date(a[Object.keys(a)].st_date))
                setStatement(statement_sort)
                renderloading()
                // console.log(statement);
                // console.log(state);
                // console.log(state[0][Object.keys(state[0])]);
                // console.log(moment("Wednesday 24 May 2002").format("LLLL"));
            } catch (er) {
                console.log(er)
            }
            })
        },[])
        function currencyFormat(num) {
            return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
          }
  return (
    <div className="min-h-screen bg-[#F9F8F8]">
        <div className='h-full w-full flex justify-center'>
            <img src={bgNoti} className="w-full absolute" alt="" />
            <div id="modal" className="w-full h-full absolute z-[100]">
      <Loading />
      </div>
            <NavigationBar />
            <div className='w-full h-screen flex justify-center items-center'>
                <div className="relative flex flex-col bg-white w-[50%] h-[75%] pb-12 pt-8 rounded-[20px] shadow-king">
                    <div className='px-8'>
                        <p className='font-jura text-[1.75rem] font-semibold'>Notification</p>
                        <div className='h-1 w-[8rem] bg-[#07636B] rounded-[10px] ml-1'></div>
                    </div>
                    <div className='flex flex-col w-full mt-5 overflow-y-scroll'>
                        {statement.map((res, index) => {
                            return (
                                <div key={index} className='w-full flex justify-between items-center border-b-[1px] hover:bg-[#ebeaea] border-[#D9D9D9] py-5 px-12'>
                            <div className='flex items-center space-x-6'>
                                {res[Object.keys(res)].st_status.cashflow === "income"?
                                (<img src={img_income} alt="" />)
                                :(<img src={img_outcome} alt="" />)}
                                <div className='flex flex-col space-y-1'>
                                    <p className='text-[.9rem] font-[700] text-[#243747] font-lexend'>Money Moved from Successfully</p>
                                    <p className='font-lexend text-[14px] text-gray-500font-inter text-[#918F8F]'>{moment(res[Object.keys(res)].st_date).format('LLLL')}</p>
                                </div>
                            </div>
                            {res[Object.keys(res)].st_status.cashflow === "income"?
                            (<p className='text-[1.3rem] text-[#07636B]'>+ {currencyFormat(res[Object.keys(res)].st_amount)} ฿</p>)
                            :(<p className='text-[1.3rem] text-[#C85952]'>- {currencyFormat(res[Object.keys(res)].st_amount)} ฿</p>)
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
 