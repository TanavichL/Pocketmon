import React, { useState } from "react";
import "../css/styles.css";
import NavigationBar from "../components/NavigationBar";
import header from "../assets/header-bg2.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function TransferPocket() {
  const location = useLocation();
  const [amount, setAmount] = useState("");
  const { pocket } = location.state;
  return (
    <div className="min-h-screen bg-[#F9F8F8]">
      <NavigationBar />
      <img src={header} className="w-full absolute" alt="" />
      <div className="relative flex justify-center items-center h-full flex-col">
        <div className=" w-[54rem] h-[33rem] bg-white rounded-[15px] drop-shadow-xl mt-44 mb-20">
          <div className="flex items-center border border-1 w-[54rem] h-[5rem] rounded-t-[15px]">
            <div className="font-jura text-[30px] ml-10">Transfer</div>
          </div>
          <div className="font-jura text-[27px] ml-10 pt-4">To</div>
          <div className="flex justify-center items-center w-[70%]">
            <div className="flex space-x-10 items-center w-[75%] py-4">
              <img
                className="rounded-full w-80 h-80"
                src={`./src/assets/pocket-img${pocket.cloud_img}.png`}
              ></img>

              <div className="flex flex-col justify-between h-72  ">
                <div>
                  <div className="font-jura text-2xl">Cloud Pocket’s Name</div>
                  <div className="font-inter text-4xl mt-2">
                    {pocket.cloud_name}
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="">
                    <div className="font-jura text-lg ">Amount</div>
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => {
                        if(/^[0-9]+$/.test(e.target.value)){
                          setAmount(e.target.value)
                        }
                        console.log(e.target.value)
                      }}
                      className="w-full mt-2 border rounded border-gray-300 p-2 outline-none"
                    />
                  </div>
                  <div className=" justify-between space-x-10 ">
                    <Link
                      to={"/transferfrom"}
                      state={{ pocket: pocket }}
                      onClick={() => {
                        localStorage.setItem("amount", amount);
                      }}
                    >
                      <button className="border rounded-[10px] bg-[#07636B] w-72 h-10  font-jura text-white">
                        Continue
                      </button>
                    </Link>
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
