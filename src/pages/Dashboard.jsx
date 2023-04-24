import React from "react";
import NavigationBar from "../components/NavigationBar";
import logoCashBox from "..//assets/logo-cashbox.svg";
import header from "../assets/header-bg.svg";
export default function Dashboard() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#F9F8F8]">
      <NavigationBar />
      <div className="relative flex justify-center items-end w-full h-full bg-[#F9F8F8]">
        <img src={header} className="w-full" alt="" />
        <div className="w-[85%] flex flex-col absolute z-2">
          <p className="font-jura font-bold text-4xl -translate-y-4 text-white">
            Good Afternoon, Owen
          </p>
          <div className="w-[32rem] h-[7rem] rounded-xl translate-y-8 shadow-king py-4 px-8 flex justify-start items-center space-x-4 bg-white">
            <img src={logoCashBox} alt="" />
            <div className="">
              <p className="font-jura text-lg text-[#555555]">Cashbox</p>
              <p className="text-xl font-lexend">$ 2000</p>
              <p className="font-jura text-sm">Account Number: x-xxx-4137</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] flex mt-14">
        <div className="w-[60%] h-[20rem] p-8 rounded-2xl shadow-king bg-white mr-14">
          <div className="flex justify-between">
            <div>
              <p className="text-xl font-jura font-bold text-[#07636B]">
                Cloud Pocket
              </p>
              <div className="h-1 w-[5rem] bg-[#07636B] rounded-full"></div>
            </div>
            <button type="submit" className="text-white text-center text-sm rounded-lg px-8 py-1 bg-[#07636B]">
              Add
            </button>
          </div>
        </div>
        <div className="w-[40%] h-[10rem] p-8 rounded-2xl shadow-king bg-white"></div>
      </div>
    </div>
  );
}
