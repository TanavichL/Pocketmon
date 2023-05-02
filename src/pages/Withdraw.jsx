import React from "react";
import { useState,useEffect } from "react";
import "../css/styles.css";
import NavigationBar from "../components/NavigationBar";
import header from "../assets/header-bg2.svg";
import qr from "../assets/qr-code.png";

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
        <div className="font-inter text-[30px] ml-10">{minutes}:{seconds} นาที</div>

    )
}

function Withdraw() {
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
            <img src={qr} className=" w-60 border border-1 p-2"></img>
            <div className="flex flex-col">
              <div className="font-inter text-[20px] ml-10">
                กรุณาทำการชำระเงินภายใน
              </div>
              <Countdown/>
              <div className=" justify-between mt-52">
                <button className="border rounded-[10px] bg-[#07636B] w-36 h-10 ml-20 font-jura text-white">
                  Done
                </button>
                <button className="border rounded-[10px] w-36 ml-10 h-10 bg-[#908F8F]/20 font-jura text-[#07636B]">
                  Back  
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Withdraw;
