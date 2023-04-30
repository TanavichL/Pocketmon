import React, {useState, useEffect} from "react";
import NavigationBar from "../components/NavigationBar";
import "../css/styles.css";
import header from "../assets/header-bg2.svg";
import cash from "../assets/transfer-pocket-img/Cashbox.svg";
import investment from "../assets/transfer-pocket-img/ivestment-transfer.svg";
import axios from "axios";
import path from "../../path";
export default function TransferFrom() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .post(`${path}/getUser`, {
        user_id: parseInt(localStorage.getItem("user_id")),
      })
      .then((res) => {
        try {
          setUser(res.data);
          console.log(res.data)
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
        <div className=" w-[55rem] min-h-[36rem] pb-10 bg-white rounded-[15px] drop-shadow-xl mt-44 mb-20">
          <div className="flex justify-center items-center border border-1 w-full h-[5rem] rounded-t-[15px]">
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
                  {user &&
                  (<div className="font-jura">Account Number: x-xxx-{user.account_number.slice(-4)}</div>)}
                </div>
              </div>
              <div className="mt-5">
                <p className="text-2xl font-jura">Or</p>
              </div>

              <div className="w-full grid grid-cols-2 gap-4">
              {user &&
              user.pocket.map((res, index) => {
                return (
                <div className="w-full flex space-x-5 shadow-king p-3 rounded-2xl">
                  <img src={`./src/assets/pocket-img-preview/cloud_preview_${res.cloud_img}.svg`} alt="" />
                  <div className="font-jura font-bold flex flex-col ">
                    <p className="text-gray-400 text-lg capitalize">{res.cloud_name}</p>
                    <p className="text-[#2b5558] text-lg font-normal font-inter">฿ {res.cloud_balance}</p>
                  </div>
                </div>)
              })}
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}