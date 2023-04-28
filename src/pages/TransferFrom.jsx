import React from "react";
import NavigationBar from "../components/NavigationBar";
import "../css/styles.css";
import header from "../assets/header-bg2.svg";
import cash from "../assets/transfer-pocket-img/Cashbox.svg";
import investment from "../assets/transfer-pocket-img/ivestment-transfer.svg";
export default function TransferFrom() {
  return (
    <div className="min-h-screen  bg-[#F9F8F8]">
      <NavigationBar />
      <img src={header} className="w-full absolute" alt="" />
      <div className="relative flex justify-center items-center h-full flex-col">
        <div className=" w-[50rem] h-[36rem] bg-white rounded-[15px] drop-shadow-xl mt-44 mb-20">
          <div className="flex justify-center items-center border border-1 w-[50rem] h-[5rem] rounded-t-[15px]">
            <div className="w-11/12 flex justify-between items-center">
              <div className="font-jura text-[30px]">Transfer</div>
              <button className="bg-[#07636B] h-8 w-24 text-white font-jura rounded-lg">
                Confirm
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col w-11/12 space-y-5">
              <div className="mt-5">
                <p className="text-2xl font-jura">From</p>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2 flex flex-col p-5 shadow-king space-y-3 rounded-[15px] drop-shadow-xl">
                  <div className="flex space-x-6">
                    <img src={cash} width={75} alt="" />
                    <div className="font-jura font-bold flex flex-col ">
                      <p className="text-gray-400 text-xl">Cashbox</p>
                      <p className="text-[#2b5558] text-lg">$ 2000</p>
                    </div>
                  </div>
                  <div className="font-jura">Account Number: x-xxx-4137</div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-2xl font-jura">Or</p>
              </div>

              <div className="w-full grid-cols-2">
                <div className="w-1/2 flex space-x-5 shadow-king p-3 rounded-2xl">
                  <img src={investment} alt="" />
                  <div className="font-jura font-bold flex flex-col ">
                    <p className="text-gray-400 text-lg">Cashbox</p>
                    <p className="text-[#2b5558] text-lg">$ 2000</p>
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