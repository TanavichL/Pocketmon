import React from "react";
import { useState } from "react";
import "../css/styles.css";
import NavigationBar from "../components/NavigationBar";
import header from "../assets/header-bg.svg";
import income from "../assets/income.svg";
import outcome from "../assets/outcome.svg";
import footer from "../assets/footer-bg.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import path from "../../path";

function Pocket() {
  const [isEdit, setIsEdit] = useState(false);
  const location = useLocation();
  const { pocket } = location.state;
  console.log(pocket);
  // console.log(pocket.cloud_statement[1])
  // console.log(pocket.cloud_statement[0][Object.keys(pocket.cloud_statement[0])])
  if (pocket == null) {
    window.location.replace("/dashboard");
  }
  const editHandler = () => {
    setIsEdit(!isEdit);
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
              className="rounded-full w-48 h-48 ml-10"
              src={`./src/assets/pocket-img${pocket.cloud_img}.png`}
            ></img>
            <div className="flex-col">
              <div className="flex flex-row relative">
                <p className="font-jura text-[20px] ml-36 capitalize">
                  Cloud Pocket’s Name
                </p>
                {!isEdit ? (
                  <div className="flex flex-row ">
                    <Link
                      to={"/transferpocket"}
                      state={{ pocket: pocket }}
                      className="border border-blue ml-20 flex justify-center items-center bg-[#334A9C] text-white  text-center rounded-lg w-24 h-8"
                    >
                      Tranfer
                    </Link>
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
                      onClick={editHandler}
                      className="border border-blue ml-2 flex justify-center items-center text-center bg-[#A9A9A9] text-white rounded-lg w-24 h-8  "
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              {!isEdit ? (
                <p
                  id="name"
                  className="text-2xl font-bold font-jura capitalize ml-36"
                >
                  {pocket.cloud_name}
                </p>
              ) : (
                <input
                  type="text"
                  id="name"
                  className="font-jura border border-[#B4B4B4] rounded-[10px] outline-none text-[18px] ml-36 px-2 py-1"
                  placeholder={pocket.cloud_name}
                />
              )}

              <p className="font-inter text-xl py-2 ml-36">
                ฿ {pocket.cloud_balance}
              </p>

              {!isEdit ? (
                <p id="description" className="font-jura text-[15px] ml-36">
                  Our team is made up of experienced software developers, and
                  customer support specialists. We work closely together to
                  create innovative solutions that simplify the process of
                  managing your money.
                </p>
              ) : (
                <textarea
                  type="text"
                  id="description"
                  className="font-jura text-[15px] w-[20rem] ml-36 border border-[#B4B4B4] rounded-[10px] outline-none px-2 py-1"
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
                          Date : {res_statement.st_date.slice(-12)}
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
                          Date : {res_statement.st_date.slice(-12)}
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
