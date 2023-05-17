import React, { useEffect } from "react";
import { useState } from "react";
import "../css/styles.css";
import NavigationBar from "../components/NavigationBar";
import header from "../assets/header-bg.svg";
import income from "../assets/income.svg";
import outcome from "../assets/outcome.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import path from "../../path";
import moment from "moment/moment";
import lock from "../assets/lock.svg";
import unlock from "../assets/unlock.svg";

function Pocket() {
  const [isEdit, setIsEdit] = useState(false);
  const [namePocket, setNamePocket] = useState("");
  const [description, setDescription] = useState("");
  const location = useLocation();
  const { pocket } = location.state;
  const [pocketIndex, setPocketIndex] = useState(
    parseInt(localStorage.getItem("pocketIndex"))
  );
  const [isChecked, setIsChecked] = useState(pocket.cloud_lock);



  console.log(pocket);
  // console.log(pocket.cloud_statement[1])
  // console.log(pocket.cloud_statement[0][Object.keys(pocket.cloud_statement[0])])
  if (pocket == null) {
    window.location.replace("/dashboard");
  }
  const editHandler = () => {
    setIsEdit(!isEdit);
  };

  const nameHandler = (e) => {
    setNamePocket(e.target.value);
    console.log(namePocket);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const router = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9F8F8]">
      <NavigationBar />
      <img src={header} className="w-full absolute" alt="" />
      <div className="relative flex justify-center items-center h-full flex-col">
        <div className=" w-[60rem] h-[19rem] bg-white rounded-[15px] px-10 py-10 drop-shadow-xl mt-44">
          <div className="flex">
            <img
              className="rounded-full w-60 h-60 ml-10"
              src={`./src/assets/pocket-img${pocket.cloud_img}.png`}
            ></img>
            <div className="flex-col">
              <div className="flex flex-row relative">
                <p className="font-inter text-xl ml-20 capitalize">
                  Cloud Pocket’s Name
                </p>
                {!isEdit ? (
                  <div className="flex ">

                    {isChecked ? (
                       <button

                       className="border border-blue ml-20 flex justify-center items-center bg-[gray] text-white  text-center rounded-lg w-24 h-8"
                     >
                       Tranfer
                     </button>
 
                    ) : (
                      <Link
                      to={"/transferpocket"}
                      state={{ pocket: pocket }}
                      className="border border-blue ml-20 flex justify-center items-center bg-[#334A9C] text-white  text-center rounded-lg w-24 h-8"
                    >
                      Tranfer
                    </Link>
                    )}


                    <button
                      onClick={editHandler}
                      className="border border-blue ml-2 flex justify-center items-center text-center bg-[#07636B] text-white rounded-lg w-24 h-8  "
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-row ">
                    <button
                      onClick={() => {
                        if (confirm("Are you sure to delete this pocket")) {
                          axios
                            .post(`${path}/deletepocket`, {
                              user_id: parseInt(
                                localStorage.getItem("user_id")
                              ),
                              index: parseInt(
                                localStorage.getItem("pocketIndex")
                              ),
                            })
                            .then((res) => {
                              try {
                                if (res.data == "Pocket has been deleted") {
                                  router("/dashboard");
                                }
                              } catch (er) {
                                console.log(er);
                              }
                            });
                        }
                      }}
                      className="border border-blue ml-20 flex justify-center items-center bg-[#E8534E] text-white  text-center rounded-lg w-24 h-8"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        editHandler();
                        if (confirm("Are you sure to save this pocket")) {
                          axios
                            .post(`${path}/editpocket`, {
                              user_id: localStorage.getItem("user_id"),
                              indexPocket: pocketIndex,
                              pocket: {
                                cloud_balance: pocket.cloud_balance,
                                cloud_description: description,
                                cloud_img: pocket.cloud_img,
                                cloud_lock: isChecked,
                                cloud_name: namePocket,
                                cloud_statement: pocket.cloud_statement,
                              },
                            })
                            .then((res) => {
                              try {
                                if (res.data == "Pocket has been edited") {
                                  router("/dashboard");
                                }
                              } catch (er) {
                                console.log(er);
                              }
                            });
                        }
                      }}
                      className="border border-blue ml-2 flex justify-center items-center text-center bg-[#334A9C] text-white rounded-lg w-24 h-8 "
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>
              {!isEdit ? (
                <p
                  id="name"
                  className="text-3xl font-medium py-1.5 font-inter capitalize ml-20"
                >
                  {pocket.cloud_name}
                </p>
              ) : (
                <input
                  type="text"
                  id="name"
                  className="font-jura border border-[#B4B4B4] rounded-[10px] outline-none text-[18px] ml-20 px-2 py-1"
                  placeholder={pocket.cloud_name}
                  onChange={nameHandler}
                />
              )}

              <p className="font-inter text-xl py-2 ml-20">
                ฿ {pocket.cloud_balance}.00
              </p>

              {!isEdit ? (
                <p id="description" className="font-jura text-[15px] ml-20">
                  {pocket.cloud_description}
                </p>
              ) : (
                <textarea
                  type="text"
                  id="description"
                  className="font-jura text-[15px] w-[20rem] ml-20 border border-[#B4B4B4] rounded-[10px] outline-none px-2 py-1"
                  placeholder={pocket.cloud_description}
                  onChange={descriptionHandler}
                />
              )}

              {!isEdit ? (
                <div className="flex flex-row ml-20"></div>
              ) : (
                <div className="flex items-centers space-y-5 space-x-2">
                  <label className="relative inline-flex items-center cursor-pointer mt-5 ml-20">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onChange={handleCheckboxChange}
                    ></input>
                    <div className="w-11 h-6  bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-[#07636B] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>

                  {isChecked ? (
                    <img src={lock} className="w-5" />
                  ) : (
                    <img src={unlock} className="w-7" />
                  )}

                  <div className="flex flex-col">
                    <p className="font-jura text-[20px] font-bold">
                      Lock Cloud Pocket
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-[60rem] min-h-[35rem] bg-white rounded-[15px] mt-10 mb-20 overflow-y-auto shadow-king">
          <div className="border border-1 rounded-t-[15px] w-[60rem] h-[5rem] flex items-center justify-between">
            <div className="font-lexend text-[30px] p-10">Statement</div>
            <div className="font-lexend text-[20px] text-gray-500 p-10">
              Total Balance : ฿{pocket.cloud_balance}.00
            </div>
          </div>
          {pocket.cloud_statement.length > 0 &&
            pocket.cloud_statement.map((res, index) => {
              let res_statement = res[Object.keys(res)];
              if (res_statement.st_status.cashflow == "income") {
                return (
                  <div
                    key={index}
                    className="border border-1 rounded-[15pm] w-[60rem] h-[5rem] flex items-center hover:bg-[#ebeaea]"
                  >
                    <img className="w-10 h-10 ml-10" src={income}></img>

                    <div className="flex justify-between w-full mr-10">
                      <div className="flex flex-col">
                        <div className="font-lexend text-[15px] text-black ml-10">
                          Money Moved Successfully
                        </div>
                        <div className="font-lexend text-[15px] text-gray-500 ml-10">
                          Date : {moment(res_statement.st_date).format("LLLL")}
                        </div>
                      </div>

                      <div className="flex">
                        <div className="font-lexend text-[20px] text-green-500 ml-10">
                          + ฿{res[Object.keys(res)].st_amount}.00
                        </div>
                      </div>
                    </div>
                  </div>
                );
                // <Income price={res[Object.keys(res)].st_amount}/>;
              } else {
                return (
                  <div
                    key={index}
                    className="border border-1 rounded-[15pm] w-[60rem] h-[5rem] flex items-center hover:bg-[#ebeaea]"
                  >
                    <img className="w-10 h-10 ml-10" src={outcome}></img>

                    <div className="flex justify-between w-full mr-10">
                      <div className="flex flex-col">
                        <div className="font-lexend text-[15px] text-black ml-10">
                          Money Moved Successfully
                        </div>
                        <div className="font-lexend text-[15px] text-gray-500 ml-10">
                          Date : {moment(res_statement.st_date).format("LLLL")}
                        </div>
                      </div>

                      <div className="flex">
                        <div className="font-lexend text-[20px] text-red-500 ml-10">
                          - ฿{res[Object.keys(res)].st_amount}.00
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>

      {/* <img src={footer} className="w-full absolute"></img> */}
    </div>
  );
}
export default Pocket;
