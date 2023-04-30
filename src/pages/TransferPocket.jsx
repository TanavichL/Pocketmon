import React from "react";
import "../css/styles.css";
import NavigationBar from "../components/NavigationBar";
import header from "../assets/header-bg2.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function TransferPocket() {
  const location = useLocation();
  const { pocket } = location.state;
  console.log(pocket)

  return (
    <div className="min-h-screen bg-[#F9F8F8]">
      <NavigationBar />
      <img src={header} className="w-full absolute" alt="" />
      <div className="relative flex justify-center items-center h-full flex-col">
        <div className=" w-[58rem] h-[33rem] bg-white rounded-[15px] drop-shadow-xl mt-44 mb-20">
          <div className="flex items-center border border-1 w-[58rem] h-[5rem] rounded-t-[15px]">
            <div className="font-jura text-[30px] ml-10">Transfer</div>
          </div>
          <div className="font-jura text-[27px] ml-10 pt-4">To</div>
          <div className="flex justify-center items-center w-full">
            <div className="flex justify-between items-center w-4/5 p-4 ">
              <img
                src={`./src/assets/pocket-img-preview/cloud_preview_${pocket.cloud_img}.svg`}
                className=" w-80"
              ></img>
              <div className="flex flex-col justify-between h-72  ">
                <div>
                  <div className="font-inter text-[25px]">
                    Cloud Pocket’s Name
                  </div>
                  <div className="font-inter text-[37px] ">
                    {pocket.cloud_name}
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="">
                    <div className="font-inter text-[16px] ">Amount</div>
                    <input
                      type="text"
                      className="w-full mt-2 border rounded border-gray-300 p-2 outline-none"
                    />
                  </div>
                  <div className=" justify-between space-x-10 ">
                    <button className="border rounded-[10px] bg-[#07636B] w-72 h-10  font-jura text-white">
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
