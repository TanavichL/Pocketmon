import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import "../css/styles.css";
import header from "../assets/header-bg2.svg";
import icon_profile from "../assets/profile-icon.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import path from "../../path";
export default function TransferTo() {
  const [user, setUser] = useState(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const router = useNavigate();
  useEffect(() => {
    axios
      .post(`${path}/getUser`, {
        user_id: parseInt(localStorage.getItem("user_id")),
      })
      .then((res) => {
        try {
          setUser(res.data);
          console.log(res.data);
        } catch (er) {
          console.log(er);
        }
      });
  }, []);
  return (
    <div className="min-h-screen  bg-[#F9F8F8]">
      <NavigationBar />
      <img src={header} className="w-full absolute" alt="" />
      <div className="relative flex justify-center items-center h-full flex-col">
        <div className=" w-[50rem] h-[34rem] bg-white rounded-[15px] drop-shadow-xl mt-44 mb-20">
          <div className="flex items-center border border-1 w-[50rem] h-[5rem] rounded-t-[15px]">
            <div className="font-jura text-[30px] ml-10">Transfer To</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col w-11/12 space-y-5">
              <div className="mt-5">
                <p className="text-lg font-jura">Recent Account</p>
              </div>
              <div className="flex space-x-4">
                <div className="w-60 flex justify-center border rounded-lg p-3 border-gray-300 space-x-6">
                  <img src={icon_profile} alt="" />
                  <div className="font-jura text-[#07636B] font-bold flex flex-col justify-center">
                    <p>Phufa</p>
                    {user && <p>x-xxx-{user.account_number.slice(-4)}</p>}
                  </div>
                </div>
              </div>
              <div className="font-jura space-y-2">
                <p className="text-lg ">Account Number</p>
                <input
                  type="text"
                  className="w-full border rounded border-gray-300 p-2 outline-none"
                  onChange={(e) => {
                    setAccountNumber(e.target.value);
                  }}
                />
              </div>
              <div className="font-jura space-y-2">
                <p className="text-lg ">Amount</p>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border rounded border-gray-300 p-2 outline-none"
                    onChange={(e) => {
                      setAmount(parseInt(e.target.value));
                    }}
                  />
                  <p className="absolute right-4 top-1.5 text-xl text-gray-400">
                    THB
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (accountNumber.length != 8){
                    alert('Please Enter Account Number')
                  }
                  else if (parseInt(amount) <= 0) {
                    alert('Please Enter Amount')
                  }
                  else{
                    localStorage.setItem("amount", amount);
                    localStorage.setItem("account_number", accountNumber);
                    router("/transferaccount");
                  }
                }}
                className="bg-[#07636B] text-center font-jura text-white rounded-md p-2"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
