import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import "../css/styles.css";
import header from "../assets/header-bg2.svg";
import cash from "../assets/transfer-pocket-img/Cashbox.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import path from "../../path";

export default function TransferFrom() {
  const [user, setUser] = useState(null);
  const [selectPocket, setSelectPocket] = useState(null);
  const amount = parseInt(localStorage.getItem("amount"));
  const pocketDestination = localStorage.getItem("pocketIndex");
  const router = useNavigate();
  useEffect(() => {
    axios
      .post(`${path}/getuser`, {
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

  // const [isSelected, setIsSelected] = useState(false);
  const [selectIndex, setSelectIndex] = useState(0);
  const handleSelectChange = (res,index) => {
    // setIsSelected(isSelected);
    setSelectPocket(res)
    setSelectIndex(index);
    console.log(selectIndex);
  };
  function RenderImage({ user,selectIndex, handleSelectChange }) {
    return (
      <div className="w-full grid grid-cols-2 gap-4">
        {user &&
          user.pocket.map((res, index) => {
            return (
              <div
                key={index}
                className={`w-full flex space-x-5 shadow-king p-3 rounded-2xl ${
                  selectIndex == index
                    ? "border-[1px] rounded-2xl border-[#07636B]"
                    : ""
                }`}
                onClick={() => handleSelectChange(res,index)}
              >
                <img
                  src={`./src/assets/pocket-img-preview/cloud_preview_${res.cloud_img}.svg`}
                  alt=""
                  className="border border-red-200 w-[5rem] h-[4.5rem] object-cover rounded-xl"
                />

                <div className="font-jura font-bold flex flex-col ">
                  <p className="text-gray-400 text-lg capitalize">
                    {res.cloud_name}
                  </p>
                  <p className="text-[#2b5558] text-lg font-normal font-inter">
                    ฿ {res.cloud_balance}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    );
  }

  function transferFromCashbox(){
    if (selectPocket.cloud_balance < amount) {
        alert("Insufficient Funds");
      } else {
        axios
          .post(`${path}/transfercashtopocket`, {
            user_id: user.user_id,
            pocket_recipient_index: parseInt(pocketDestination),
            cash: amount,
            stateRecipient: {
              a2b3c4e6f8z0: {
                st_amount: amount,
                st_date: new Date().toString(),
                st_status: {
                  cashflow: "income",
                  type: "pocket",
                },
              },
            },
            stateTransfer: {
              jz8f6e4c3b2a: {
                st_amount: amount,
                st_date: new Date().toString(),
                st_status: {
                  cashflow: "outcome",
                  type: "pocket",
                },
              },
            },
          })
          .then((res) => {
            try {
              console.log(res.data);
              localStorage.removeItem("amount");
              localStorage.removeItem("pocketIndex");
              router("/dashboard");
            } catch (er) {
              console.log(er);
            }
          });
      }
  }
  function transferFromPocket() {
    if (selectPocket.balance < amount) {
      alert("Insufficient Funds");
    } else {
      axios
        .post(`${path}/transfermypocket`, {
          user_id: user.user_id,
          pocket_transfer_index: parseInt(selectIndex),
          pocket_recipient_index: parseInt(pocketDestination),
          cash: amount,
          stateRecipient: {
            a2b3c4e6f8z0: {
              st_amount: amount,
              st_date: new Date().toString(),
              st_status: {
                cashflow: "income",
                type: "pocket",
              },
            },
          },
          stateTransfer: {
            jz8f6e4c3b2a: {
              st_amount: amount,
              st_date: new Date().toString(),
              st_status: {
                cashflow: "outcome",
                type: "pocket",
              },
            },
          },
        })
        .then((res) => {
          try {
            console.log(res.data);
            localStorage.removeItem("amount");
            localStorage.removeItem("pocketIndex");
            router("/dashboard");
          } catch (er) {
            console.log(er);
          }
        });
    }
  }
  function transferForm() {
    if (confirm("Are you sure to transfer from this pocket")) {
      if (selectIndex == 137) {
        transferFromCashbox();
      } else {
        transferFromPocket();
      }
    }
  }
  return (
    <div className="min-h-screen  bg-[#F9F8F8]">
      <NavigationBar />
      <img src={header} className="w-full absolute" alt="" />
      <div className="relative flex justify-center items-center h-full flex-col">
        <div className=" w-[55rem] min-h-[36rem] pb-10 bg-white rounded-[15px] drop-shadow-xl mt-44 mb-20">
          <div className="flex justify-center items-center border border-1 w-full h-[5rem] rounded-t-[15px]">
            <div className="w-11/12 flex justify-between items-center">
              <div className="font-jura text-[30px]">Transfer</div>
              <button
                onClick={transferForm}
                className="bg-[#07636B] h-8 w-24 text-white font-jura rounded-lg"
              >
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
                {user &&(
                <div
                  onClick={() => {
                    setSelectIndex(137);
                    setSelectPocket(user.cashbox)
                  }}
                  className={`w-1/2 flex flex-col p-5 shadow-king space-y-3 rounded-[15px] drop-shadow-xl ${
                    selectIndex == 137
                      ? "border-[1px] rounded-2xl border-[#07636B]"
                      : ""
                  }`}
                >
                  <div className="flex space-x-6">
                    <img src={cash} width={75} alt="" />
                    <div className="font-jura font-bold flex flex-col ">
                      <p className="text-gray-400 text-xl">Cashbox</p>
                      <p className="text-[#2b5558] text-lg">฿ {user.cashbox.balance}</p>
                    </div>
                  </div>
                  {user && (
                    <div className="font-jura">
                      Account Number: x-xxx-{user.account_number.slice(-4)}
                    </div>
                  )}
                </div>)}
              </div>
              <div className="mt-5">
                <p className="text-2xl font-jura">Or</p>
              </div>

                <RenderImage user={user} selectIndex={selectIndex} handleSelectChange={handleSelectChange}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
