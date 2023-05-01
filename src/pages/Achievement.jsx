import React from 'react'
import { useState, useEffect } from 'react'
import NavigationBar from '../components/NavigationBar'
import "../css/styles.css"
import bgAchievement from "../assets/bg-achievement.svg"
import axios from 'axios'
import path from '../../path'
import moment from 'moment'
import imgwater from '../assets/img-water.svg'
import tree from "../assets/tree.svg"

function Achievement() {
    const [visible, setVisible] = useState(true);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    useEffect(()=>{
        axios.post(`${path}/getUser`, {
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
            } catch (er) {
                console.log(er)
            }
            })
        },[])
    function CovertDate(date){
        return moment(date).format("LL");
    }
  return (
    <div className="min-h-screen bg-[#F9F8F8]">
        <div className='h-full w-full flex justify-center'>
            <img src={bgAchievement} className="w-full absolute" alt="" />
            <NavigationBar />
            <div className='w-full h-screen flex justify-center items-center mb-20'>
                <div className="relative flex flex-col mt-44  bg-white w-[60%] rounded-[20px] shadow-king">
                    <div className='flex justify-between items-center border-b-2 2xl:px-20 lg:px-8 pt-12 pb-6'>
                        <p className='font-jura text-[1.875vw]'>Achievement</p>
                        <div className='w-[13%] rounded-full box-shadow-3d flex bg-[#F3F3F3]'>
                            <img className='h-full' src={imgwater} alt="" />
                            <div className='flex items-center justify-center w-full pr-2'>
                                <p className='text-[1.0416666666666667vw] font-[500]'>100</p>
                            </div>
                        </div>
                    </div>
                    <div id='tree-bg' className='2xl:px-20 lg:px-8 py-12 flex flex-col items-center space-y-4'>
                        <p className='font-lexend text-[1.6666666666666667vw] font-[400] text-[#385872]'>My plant</p>
                        <p className='text-[0.9375vw] text-[#C4C4C4] font-[400]'>Every 1000 ฿ in your account. You will receive 1 water per month </p>
                        <img src={tree} alt="" />
                        <p className='font-lexend text-[1.6666666666666667vw] font-[400] text-[#385872]'>61/100</p>
                        <div className='py-2 px-8 rounded-[10px] bg-[#07636B]'>
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
 