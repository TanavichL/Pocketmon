import React from "react";
import NavigationBar from "../components/NavigationBar";
import "../css/styles.css";
import square from "../assets/square.svg";
import img1 from "../assets/pocket-img1.png";
import img2 from "../assets/pocket-img2.png";
import img3 from "../assets/pocket-img3.png";
import img4 from "../assets/pocket-img4.png";

function AddPocket() {
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
              <img className="w-[180px] h-[156px] mt-5" src={img1} alt="" />
              <img className="w-[180px] h-[156px] mt-5" src={img2} alt="" />
              <img className="w-[180px] h-[156px] mt-5" src={img3} alt="" />
              <img className="w-[180px] h-[156px] mt-5" src={img4} alt="" />
            </div>
            <p className="font-jura text-[20px] font-bold mt-5 mb-5">
              Enter Cloud Pocket name
            </p>
            <input
              type="text"
              id="pocket_name"
              class="block border border-gray-300 w-96 h-10 p-5 rounded-lg"
            ></input>

            <label class="relative inline-flex items-center cursor-pointer mt-5">
              <input type="checkbox" value="" class="sr-only peer"></input>
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Toggle me
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddPocket;
