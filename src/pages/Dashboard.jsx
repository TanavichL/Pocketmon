import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import logoCashBox from "../assets/logo-cashbox.svg";
import header from "../assets/header-bg.svg";
import investment from "../assets/investment_cloud.svg";
import IconProfile from "../assets/profile-icon.svg";
import axios from "axios";
import path from "../../path"
function Dashboard() {
  var data = [
    {
      img: investment,
      name: "investment",
      amount: "8,000.00",
    },
    {
      img: investment,
      name: "investment",
      amount: "8,000.00",
    },
    {
      img: investment,
      name: "investment",
      amount: "8,000.00",
    },
    {
      img: investment,
      name: "food",
      amount: "2,000.00",
    },
    {
      img: investment,
      name: "travel",
      amount: "4,000.00",
    },
    {
      img: investment,
      name: "party",
      amount: "10,000.00",
    },
    {
      img: investment,
      name: "investment",
      amount: "8,000.00",
    },
  ];
  const [user, setUser] = useState(null)
  useEffect(()=>{
    axios.post(`${path}/getUser`, {
      user_id: parseInt(localStorage.getItem("user_id")),
    }).then((res)=>{
      try {
        setUser(res.data)
      } catch (er) {
        console.log(er)
      }
    })
  })
  return (
    <div className="w-full min-h-screen flex pb-10 flex-col items-center bg-[#F9F8F8]">
      <NavigationBar />
      <div className="relative flex justify-center items-end w-full h-full bg-[#F9F8F8]">
        <img src={header} className="w-full" alt="" />
        <div className="w-[85%] flex flex-col absolute z-2">
          {user &&
          (<p className="font-jura font-bold text-4xl -translate-y-4 text-white">
            Good Afternoon, {user.firstname}
          </p>)}
          <div className="w-[32rem] h-[7rem] rounded-xl cursor-pointer translate-y-8 shadow-king py-4 px-8 flex justify-start items-center space-x-4 bg-white">
            <img src={logoCashBox} alt="" />
            <div className="">
              <p className="font-jura text-lg text-[#555555]">Cashbox</p>
              <p className="text-xl font-inter font-normal">$ 2000</p>
              <p className="font-jura text-sm">Account Number: x-xxx-4137</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] flex mt-14">
        {/* Cloud Pocket */}
        <div className="w-[60%] p-8 pb-10 rounded-2xl shadow-king bg-white mr-14">
          <div id="top-cloud-pocket-box" className="flex justify-between">
            <div>
              <p className="text-2xl font-jura font-bold text-[#07636B]">
                Cloud Pocket
              </p>
              <div className="h-1 w-[5rem] mt-1.5 bg-[#07636B] rounded-full"></div>
            </div>
            <Link to={'/addpocket'}
              className="h-9 text-white flex items-center text-center text-sm rounded-lg px-10 bg-[#07636B]"
            >
              Add
            </Link>
          </div>
          <div className="grid grid-cols-3 h-[33rem] gap-8 mt-8 overflow-y-scroll">
            {data.map((res, index) => {
              return (
                <div
                  key={index}
                  className="col-span-1 h-[15rem] rounded-xl shadow-king"
                >
                  <div className="w-full rounded-lg">
                    <img src={res.img} className="w-full" alt="" />
                  </div>
                  <div className="p-4">
                    <div className="text-[#8F8B8B] text-lg">{res.name}</div>
                    <div className="text-lg mt-8">฿ {res.amount}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[40%] space-y-12">
          {/* Account balance */}
          <div className="w-full h-[10rem] py-4 px-6 rounded-2xl shadow-king bg-white">
            <p className="text-2xl font-jura font-bold text-[#07636B]">
              Account Balance
            </p>
            <div className="h-1 w-[5rem] mt-1.5 bg-[#07636B] rounded-full"></div>
            <p className="text-4xl font-inter text-[#8F8B8B] mt-5">8000.00 ฿</p>
          </div>
          {/* Recent */}
          <div className="w-full py-4 px-6 rounded-2xl shadow-king bg-white">
            <p className="text-2xl font-jura font-bold text-[#07636B]">
              Recent
            </p>
            <div className="h-1 w-[5rem] mt-1.5 bg-[#07636B] rounded-full"></div>
            <div className="mt-4 flex space-x-6">
              <div className="flex flex-col items-center space-y-1">
                <img src={IconProfile} alt="" />
                <p id="name-profile-recent" className="text-[#07636B] font-jura font-bold">Phufa</p>
                <p id="account-number-recent" className="text-[#07636B] font-jura font-bold">x-xxx-1234</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <img src={IconProfile} alt="" />
                <p id="name-profile-recent" className="text-[#07636B] font-jura font-bold">Mind</p>
                <p id="account-number-recent" className="text-[#07636B] font-jura font-bold">x-xxx-1234</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <img src={IconProfile} alt="" />
                <p id="name-profile-recent" className="text-[#07636B] font-jura font-bold">Owen</p>
                <p id="account-number-recent" className="text-[#07636B] font-jura font-bold">x-xxx-1234</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default Dashboard;
