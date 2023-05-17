import React from "react";
import { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import logoCashBox from "../assets/logo-cashbox.svg";
import header from "../assets/header-bg.svg";
import investment from "../assets/investment_cloud.svg";
import IconProfile from "../assets/profile-icon.svg";
import axios from "axios";
import path from "../../path";
import { Chart } from "react-google-charts";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [balances, setBalance] = useState(0);
  const [cashbox, setCashbox] = useState(0);
  const [visible, setVisible] = useState(true);
  const [recent, setRecent] = useState([])
  var collectRecent = []

  useEffect(() => {
    axios
      .post(`${path}/getuser`, {
        user_id: parseInt(localStorage.getItem("user_id")),
      })
      .then((res) => {
        try {
          setUser(res.data);
          console.log(res.data.pocket)
           for (let i = 0; i < res.data.pocket.length; i++) {
            var pocket = res.data.pocket[i]
            for (let j = 0; j < pocket.cloud_statement.length; j++) {
              if (pocket.cloud_statement[j][Object.keys(pocket.cloud_statement[j])].st_to){
                axios.post(`${path}/getaccountnumber`,{
                  account_number : pocket.cloud_statement[j][Object.keys(pocket.cloud_statement[j])].st_to
                }).then((res) =>{
                  if(collectRecent.filter(e => e.account_number == res.data.account_number).length == 0){
                    setRecent([...recent, {name: res.data.firstname+' '+res.data.lastname, account_number: res.data.account_number}])
                  }
                  // setRecent(collectRecent)
                  
                })
              }
            }
            
          }
          setCashbox(res.data.cashbox.balance);
          let cash = 0;
          res.data.pocket.forEach((element) => {
            cash += element.cloud_balance;
          });
          setBalance(cash);
        } catch (er) {
          console.log(er);
        }
      });
  }, []);
  



  const colors = ["#FFD1DC","#ADD8E6","#B19CD9","#77DD77","#FFFFE0","#FFB347","#CFCFC4","#FFE5B4","#E6E6FA","#98FB98"]
  
  let data = [["Clound" , "Balance"],];
  data.push(["Cashbox", cashbox])

  user &&
    user.pocket.forEach((element) => {
      data.push([element.cloud_name, element.cloud_balance]);
    });

  // console.log(balances);
  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <div className="w-full min-h-screen flex pb-10 flex-col items-center bg-[#F9F8F8]">
      <NavigationBar />
      <div className="relative flex justify-center items-end w-full h-full bg-[#F9F8F8]">
        <img src={header} className="w-full" alt="" />
        <div className="w-[85%] flex flex-col absolute z-2">
          {user && (
            <p className="font-jura font-bold text-4xl -translate-y-4 text-white">
              Good Afternoon, {user.firstname}
            </p>
          )}
          <div className="w-[32rem] h-[7rem] rounded-xl cursor-not-allowed translate-y-8 shadow-king py-4 px-8 flex justify-start items-center space-x-4 bg-white">
            <img src={logoCashBox} alt="" />
            <div className="">
              <p className="font-jura text-lg text-[#555555]">Cashbox</p>
              <p className="text-xl font-inter font-normal">
                ฿ {currencyFormat(cashbox)}
              </p>
              {user && (
                <p className="font-jura text-sm flex">
                  Account Number: x-xxx-{user.account_number.slice(-4)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] flex mt-14">
        {/* Cloud Pocket */}
        <div className="w-[60%] p-8 pb-10 rounded-2xl shadow-king bg-white mr-14">
          <div id="top-cloud-pocket-box" className="flex justify-between">
            <div>
              <p className="text-2xl font-jura font-bold text-[#07636B]">
                Cloud Pocket
              </p>
              <div className="h-1 w-[5rem] mt-1.5 bg-[#07636B] rounded-full"></div>
            </div>
            <Link
              to={"/addpocket"}
              className="h-9 text-white flex items-center text-center text-sm rounded-lg px-10 bg-[#07636B]"
            >
              Add
            </Link>
          </div>
          <div className="grid grid-cols-3 h-[33rem] gap-8 mt-8 overflow-y-scroll">
            {user &&
              user.pocket.length != 0 &&
              user.pocket.map((res, index) => {
                return (
                  <Link
                    to={"/pocket"}
                    state={{ pocket: res }}
                    key={index}
                    onClick={() => {
                      localStorage.setItem("pocketIndex", index);
                    }}
                    className="col-span-1 h-[14rem] rounded-xl shadow-king"
                  >
                    <div className="w-full rounded-lg">
                      <img
                        src={`./src/assets/pocket-img-preview/cloud_preview_${res.cloud_img}.svg`}
                        className="w-full"
                        alt=""
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-[#8F8B8B] text-lg">
                        {res.cloud_name}
                      </div>
                      <div className="text-lg mt-5">
                        ฿ {currencyFormat(res.cloud_balance)}
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="w-[40%] space-y-12">

          {/* Account balance */}
          <div className="w-full h-[10rem] py-4 px-6 rounded-2xl shadow-king bg-white">
            <p className="text-2xl font-jura font-bold text-[#07636B]">
              Account Balance
            </p>
            <div className="h-1 w-[5rem] mt-1.5 bg-[#07636B] rounded-full"></div>
            {user && (
              <p className="text-4xl font-inter text-[#8F8B8B] mt-5">
                {currencyFormat(cashbox + balances)} ฿
              </p>
            )}
          </div>
          
          <div className="flex flex-col w-full h-[20rem] py-4 px-6 rounded-2xl shadow-king bg-white justify-center">
            <div className="flex flex-col w-full pt-3">
          <p className="text-2xl w-full font-jura font-bold text-[#07636B]">
              Balance Ratio
            </p>
            <div className="h-1 w-[5rem] mt-1.5 bg-[#07636B] rounded-full"></div>
            </div>

                <Chart
                  chartType="PieChart"
                
                  loader={<div>Loading Chart</div>}
                  options={{ is3D: false , backgroundColor: 'transparent', colors: colors,}}
                  data={data}
                  width={'100%'}
                  height={'100%'}
                />
          </div>


          
          {/* Recent */}
          <div className="w-full py-4 px-6 rounded-2xl shadow-king bg-white">
            <p className="text-2xl font-jura font-bold text-[#07636B]">
              Recent
            </p>
            <div className="h-1 w-[5rem] mt-1.5 bg-[#07636B] rounded-full"></div>
            <div className="mt-4 flex space-x-6">
              {
              recent && recent.map((res, index) =>{
                return (<div key={index} className="select-none flex flex-col items-center space-y-1">
                <img src={IconProfile} alt="" />
                <p
                  id="name-profile-recent"
                  className="text-[#07636B] font-jura font-bold"
                >
                  {res.name}
                </p>
                <p
                  id="account-number-recent"
                  className="text-[#07636B] font-jura font-bold"
                >
                  {'x-xxx-'+res.account_number.slice(-4)}
                </p>
              </div>);
              })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
