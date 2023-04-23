import React from "react";
import NavigationBar from "../components/NavigationBar";
import bg from "../assets/background-log.svg";
import header from "../assets/header-bg.svg";
export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-[#F9F8F8]">
      <NavigationBar />
      <div className="relative flex justify-center items-center w-full h-full bg-[#F9F8F8]">
        <img src={header} className="w-full border-red-200 border" alt="" />
        <div className="w-[85%] flex flex-col absolute z-2">
          <p className="font-jura font-bold text-4xl text-white">
            Good Afternoon, Owen
          </p>
          <div className="w-[22rem] h-[6rem] top-20 rounded-xl absolute bg-white">
            
          </div>
        </div>
        <div className="">

        </div>
      </div>
    </div>
  );
}
