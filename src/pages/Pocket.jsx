import React from "react";
import { useState } from "react";
import "../css/styles.css";
import NavigationBar from "../components/NavigationBar";
import img1 from "../assets/pocket-img1.png";
import header from "../assets/header-bg.svg";
import income from "../assets/income.svg";
import outcome from "../assets/outcome.svg";
import footer from "../assets/footer-bg.svg";

function Income() {
  return (
    <div className="border border-1 rounded-[15pm] w-[60rem] h-[5rem] flex items-center ">
      <img className="w-10 h-10 ml-10" src={income}></img>

      <div className="flex justify-between w-full mr-10">
        <div className="flex flex-col">
          <div className="font-lexend text-[15px] text-black ml-10">
            Money Moved Successfully
          </div>
          <div className="font-lexend text-[15px] text-gray-500 ml-10">
            Date : 12/12/2021
          </div>
        </div>

        <div className="flex">
          <div className="font-lexend text-[20px] text-green-500 ml-10">
            + ฿1000.00
          </div>
        </div>
      </div>
    </div>
  );
}

function Outcome() {
  return (
    <div className="border border-1 rounded-[15pm] w-[60rem] h-[5rem] flex items-center ">
      <img className="w-10 h-10 ml-10" src={outcome}></img>

      <div className="flex justify-between w-full mr-10">
        <div className="flex flex-col">
          <div className="font-lexend text-[15px] text-black ml-10">
            Money Moved Successfully
          </div>
          <div className="font-lexend text-[15px] text-gray-500 ml-10">
            Date : 12/12/2021
          </div>
        </div>

        <div className="flex">
          <div className="font-lexend text-[20px] text-red-500 ml-10">
            + ฿1000.00
          </div>
        </div>
      </div>
    </div>
  );
}



function Pocket() {
  const [isEdit, setIsEdit] = useState(false);
  const editHandler = () => {
    setIsEdit(!isEdit);
  };
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-[#F9F8F8]">
      <NavigationBar />

      <img src={header} className="w-full absolute" alt="" />
      <div className="relative flex justify-center items-center h-full flex-col">
        <div className=" w-[60rem] h-[19rem] bg-white rounded-[15px] px-10 py-10 drop-shadow-xl mt-44">
          <div className="flex">
            <img className="rounded-full w-48 h-48 ml-10" src={img1}></img>
            <div className="flex-col">
              <div className="flex flex-row ">
                <p className="font-jura text-[20px] ml-36">
                  Cloud Pocket's Name
                </p>
                {!isEdit ? (
                  <div className="flex flex-row ">
                    <button className="border border-blue ml-20 flex justify-center items-center bg-[#334A9C] text-white  text-center rounded-lg w-24 h-8">
                      Tranfer
                    </button>
                    <button
                      onClick={editHandler}
                      className="border border-blue ml-2 flex justify-center items-center text-center bg-[#07636B] text-white rounded-lg w-24 h-8  "
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-row ">
                    <button className="border border-blue ml-20 flex justify-center items-center bg-[#E8534E] text-white  text-center rounded-lg w-24 h-8">
                      Delete
                    </button>
                    <button
                      onClick={editHandler}
                      className="border border-blue ml-2 flex justify-center items-center text-center bg-[#A9A9A9] text-white rounded-lg w-24 h-8  "
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              {!isEdit ? (
                <p id="name" className="font-jura text-[18px] ml-36">
                  Name
                </p>
              ) : (
                <input
                  type="text"
                  id="name"
                  className="font-jura text-[18px] ml-36"
                  placeholder={name}
                />
              )}

              <p className="font-lexend text-[18px] ml-36">฿ 2000.00</p>

              {!isEdit ? (
                <p id="description" className="font-jura text-[15px] ml-36">
                  Our team is made up of experienced software developers, and
                  customer support specialists. We work closely together to
                  create innovative solutions that simplify the process of
                  managing your money.
                </p>
              ) : (
                <input
                  type="text"
                  id="description"
                  className="font-jura text-[15px] ml-36"
                  placeholder=""
                />
              )}
            </div>
          </div>
        </div>

        <div className="w-[60rem] min-h-[35rem] bg-white rounded-[15px] mt-10 mb-20 overflow-y-auto shadow-king">
          <div className="border border-1 rounded-t-[15px] w-[60rem] h-[5rem] flex items-center justify-between">
            <div className="font-lexend text-[30px] p-10">Statement</div>
            <div className="font-lexend text-[20px] text-gray-500 p-10">
              Total Balance : ฿500.00
            </div>
          </div>

          <Income />
          <Outcome />
        </div>
      </div>

      <img src={footer} className="w-full absolute"></img>
    </div>
  );
}
export default Pocket;
