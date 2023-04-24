import React from "react";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import "../css/styles.css";
import square from "../assets/square.svg";
import img1 from "../assets/pocket-img1.png";
import img2 from "../assets/pocket-img2.png";
import img3 from "../assets/pocket-img3.png";
import img4 from "../assets/pocket-img4.png";
import unlock from "../assets/unlock.svg";
import lock from "../assets/lock.svg";

function AddPocket() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [isSelected, setIsSelected] = useState(false);
  const [selectIndex, setSelectIndex] = useState();
  const handleSelectChange = (index) => {
    setIsSelected(isSelected);
    setSelectIndex(index)
  };
  function RednderImage({ index }) {
    return (
      <img
        className={`w-[180px] h-[156px] mt-5 ${
          (selectIndex == index)  ? "border-[4px] rounded-2xl border-[#07636B]" : ""
        }`}
        src={`./src/assets/pocket-img${index + 1}.png`}
        alt=""
        onClick={() => handleSelectChange(index)}
      />
    );
  }

  return (
    <div id="header-bg" className="min-h-screen bg-[#E6F2FD]">
      <NavigationBar />
      <div className="relative flex justify-center items-center h-full mt-36">
        <div className="relative w-[60rem] h-[38rem] bg-white rounded-[15px] px-20 py-16 drop-shadow-xl">
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
            <div class="grid grid-cols-4 gap-4">
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
              class="block border border-gray-300 w-96 h-10 p-5 rounded-lg"
            ></input>

            <div className="flex  items-centers space-y-5 space-x-2">
              <label class="relative inline-flex items-center cursor-pointer mt-5">
                <input
                  type="checkbox"
                  value=""
                  class="sr-only peer"
                  onChange={handleCheckboxChange}
                ></input>
                <div class="w-11 h-6  bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[17px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
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

            <button className="font-jura text-xl text-white bg-[#07576b] rounded-lg p-2 pl-5 pr-5 mt-5 h-15 hover:bg-[#07576b]/90">
              Create a Cloud Pocket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddPocket;
