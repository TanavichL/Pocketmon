import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import NavigationBar from "../components/NavigationBar";
import "../css/styles.css";
import square from "../assets/square.svg";
import unlock from "../assets/unlock.svg";
import lock from "../assets/lock.svg";
import header from "../assets/header-bg.svg";
import axios from "axios";
import path from "../../path";

function AddPocket() {
  const [isChecked, setIsChecked] = useState(false);
  const [cloudName, setCloudName] = useState("");
  const [numimg, setNumimg] = useState(0);
  const router = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [isSelected, setIsSelected] = useState(false);
  const [selectIndex, setSelectIndex] = useState();
  const handleSelectChange = (index) => {
    setNumimg(index+1)
    console.log(index+1);
    setIsSelected(isSelected);
    setSelectIndex(index);
    // console.log(selectIndex);
  };
  function RednderImage({ index }) {
    return (
      <img
        className={`cursor-pointer w-[180px] h-[156px] mt-5 ${
          selectIndex == index
            ? "border-[4px] rounded-2xl border-[#07636B]"
            : ""
        }`}
        src={`./src/assets/pocket-img${index + 1}.png`}
        alt=""
        onClick={() => handleSelectChange(index)}
      />
    );
  }
  function submitPocket() {
    let pocket_id = parseInt(Math.random() * 100000000).toString();
    const myObj = {}
    const newPocket = {}
    myObj["user_id"] = localStorage.getItem("user_id")
    newPocket[pocket_id] = {
      cloud_balance: 0,
      cloud_description: "New pocket item",
      cloud_img: "new",
      cloud_name: cloudName,
      cloud_lock: isChecked,
      cloud_statement: {},
    };
    myObj["pocket"] = newPocket
    axios.post(`${path}/addpocket`, {
      user_id : localStorage.getItem("user_id"), 
      pocket : {
        cloud_balance: 0,
        cloud_description: "New pocket item",
        cloud_img: numimg.toString(),
        cloud_name: cloudName,
        cloud_lock: isChecked,
        cloud_statement: {},
      }
    })
      .then((res) => {
        try {
          console.log(res.data);
          router("/dashboard");
        } catch (er) {
          console.log(er);
        }
      }); 
  }
  return (
    <div className="min-h-screen bg-[#F9F8F8]">
      <NavigationBar />

      <img src={header} className="w-full absolute" alt="" />

      <div className="relative flex  justify-center items-center h-full">
        <div className="relative w-[60rem] h-[40rem] bg-white rounded-[15px] px-14 py-10 drop-shadow-xl mt-40 mb-20">
          <div>
            <p className="font-jura text-[36px]">Add Pocket</p>
            <img
              className="w-[96px] z-10 right-[-20rem] top-[3rem]"
              src={square}
              alt=""
            />
            <p className="font-jura text-[20px] font-bold mt-5">
              Choose Cloud Pocket Backgroud
            </p>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <RednderImage key={index} index={index} />
              ))}
            </div>
            <p className="font-jura text-[20px] font-bold mt-5 mb-5">
              Enter Cloud Pocket name
            </p>
            <input
              type="text"
              id="pocket_name"
              onChange={(e) => {
                setCloudName(e.target.value);
              }}
              className="block border border-gray-300 w-96 h-10 p-5 rounded-lg"
            ></input>

            <div className="flex items-centers space-y-5 space-x-2">
              <label className="relative inline-flex items-center cursor-pointer mt-5">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onChange={handleCheckboxChange}
                ></input>
                <div className="w-11 h-6  bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-[#07636B] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[17px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>

              {isChecked ? (
                <img src={unlock} className="w-7" />
              ) : (
                <img src={lock} className="w-5" />
              )}

              <div className="flex flex-col">
                <p className="font-jura text-[20px] font-bold">
                  Lock Cloud Pocket
                </p>

                <p className="font-jura text-[15] text-gray-400">
                  When Cloud Pocket is locked, you can’t transfer or move money
                  from this Cloud Pocket.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                submitPocket();
              }}
              className="font-jura text-xl text-white bg-[#07576b] rounded-lg p-2 pl-5 pr-5 mt-5 h-15 hover:bg-[#07576b]/90"
            >
              Create a Cloud Pocket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddPocket;
