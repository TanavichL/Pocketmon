import React from "react";
import { useState,useEffect } from "react";
import "../css/styles.css";
import NavigationBar from "../components/NavigationBar";
import header from "../assets/header-bg2.svg";
import qr from "../assets/qr-code.png";
import QRCode from 'qrcode.react';
import generatePayload  from 'promptpay-qr';
import axios from "axios";
import path from "../../path";
import {Link} from "react-router-dom";

function Countdown() {

    const [timeLeft, setTimeLeft] = useState(900);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      // Clear timeout if component is unmounted or timeLeft reaches 0
      return () => {
        clearTimeout(timer);
      };
    }, [timeLeft]);
  
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return(
        <div className="font-inter text-[30px]">{minutes}:{seconds} นาที</div>

    )
}



function Withdraw() {
    const [user ,setUser ] = useState([]);
    const [phone ,setPhone ] = useState(""); 
    const [ amount, setAmount ] = useState(20);         
    const [ qrCode ,setqrCode ] = useState("");

    useEffect(()=>{
        axios.post(`${path}/getUser`, {
          user_id: parseInt(localStorage.getItem("user_id")),
        }).then((res)=>{
          try {
            setUser(res.data);
            setPhone(res.data.tel)
            handleAmount(amount)
            handleQR(res.data.tel)
            } catch (er) {
                console.log(er)
            }
        })
        
        },[])
    console.log(phone)

    function handleAmount(e) {
        setAmount(parseFloat(e.target.value));
        
      }
      console.log(amount)
    
    function handleQR(tel) {
        setqrCode(generatePayload(tel, { amount }));  
        alert("QR Code ได้ถูกสร้างขึ้นแล้ว")
    };


  return (
    <div className="min-h-screen bg-[#F9F8F8]">
      <NavigationBar />
      <img src={header} className="w-full absolute" alt="" />
      <div className="relative flex justify-center items-center h-screen flex-col">
        <div className=" w-[60rem] h-[32rem] bg-white rounded-[15px] drop-shadow-xl">
          <div className="flex items-center border border-1 w-[60rem] h-[5rem] rounded-t-[15px]">
            <div className="font-jura text-[30px] ml-10">WITHDRAW</div>
          </div>
          <div className="flex justify-center items-center mt-10">
            {/* <img src={qr} className=" w-60 border border-1 p-2"></img> */}
            <QRCode style={{width:"30%",height:"30%",marginRight:"20px"}} value={qrCode} />
            <div className="flex flex-col pl-10">
              <div className="font-inter text-[20px] ">
                กรุณาทำการชำระเงินภายใน
              </div>
              <Countdown/>
              <p className="text-lg ">Amount</p>
                <div className="relative mt-2">
                  <input
                    type="number"
                    className="w-full border rounded border-gray-300 p-2 outline-none"
                    value={amount}
                    onChange={handleAmount}
                  />
                  <p className="absolute right-4 top-1.5 text-xl text-gray-400">THB</p>
                </div>
              <div className=" justify-between mt-40">
                
                
                <button
                className="border rounded-[10px] bg-[#07636B] w-36 h-10 ml-20 font-jura text-white" onClick={() => handleQR(user.tel,amount)}>
                  Generate
                </button>
                
                
                <Link to={'/dashboard'}>

                <button className="border rounded-[10px] w-36 ml-10 h-10 bg-[#908F8F]/20 font-jura text-[#07636B]">
                  Back  
                </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Withdraw;
