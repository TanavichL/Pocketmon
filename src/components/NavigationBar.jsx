import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/pocket-logo.svg";
import icon_notification from "../assets/icon_notification.svg";
import icon_profile from "../assets/profile-icon.svg";
import profile_dropdown from "../assets/profile_dropdown.svg"
import logout_dropdown from "../assets/logout_dropdown.svg"
import triangle from "../assets/polygon.svg";
import path from "../../path";

export default function NavigationBar() {
  const auth = localStorage.getItem("user_id");
  const router = useNavigate();
  const [popup, setPopup] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .post(`${path}/getUser`, {
        user_id: parseInt(localStorage.getItem("user_id")),
      })
      .then((res) => {
        try {
          setUser(res.data);
        } catch (er) {
          console.log(er);
        }
      });
  });
  function NavbarItem() {
    if (auth == null) {
      return (
        <div className="w-[85%] h-20 select-none flex justify-between items-center bg-transparent">
          <Link to={"/"} id="logo" className="flex cursor-pointer">
            <img src={logo} alt="" />
            <p className="text-xl font-jura font-semibold text-[#0048B5]">
              Pocket<span className="text-black">mon</span>
            </p>
          </Link>
          <div id="navbar-item-list-before-login" className="space-x-6">
            <a href="#home" className="font-jura font-medium">
              HOME
            </a>
            <a href="#about" className="font-jura font-medium">
              ABOUT
            </a>
            <a href="#contact" className="font-jura font-medium">
              CONTACT
            </a>
          </div>
          <div id="group-button" className="flex items-center space-x-4">
            <Link
              to={"/signin"}
              className="px-4 py-1 rounded-md text-center font-jura text-black bg-white"
            >
              SignIn
            </Link>
            <Link
              to={"/signup"}
              className="px-4 py-1 rounded-md text-center font-jura text-white bg-[#07636B]"
            >
              SignUp
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-[85%] h-20 flex select-none justify-between items-center bg-transparent">
          <Link to={"/dashboard"} id="logo" className="flex cursor-pointer">
            <img src={logo} alt="" className="" />
            <p className="text-xl font-jura font-semibold text-[#0048B5]">
              Pocket<span className="text-black">mon</span>
            </p>
          </Link>
          <div id="navbar-item-list-before-login" className="space-x-6">
            <Link to={"/transfer"} className="font-jura font-medium">
              TRANSFER
            </Link>
            <Link to={"/withdraw"} className="font-jura font-medium">
              WITHDRAW
            </Link>
            <Link to={"/achievement"} className="font-jura font-medium">
              ACHIEVEMENT
            </Link>
          </div>
          <div
            id="group-button"
            className="flex items-center space-x-4 relative"
          >
            <Link to={"/notification"}>
              <img src={icon_notification} className="w-10" alt="" />
            </Link>
            <Link to={"/profile"}>
              <img src={icon_profile} className="w-10" alt="" />
            </Link>
            <img
              className="relative"
              src={triangle}
              alt=""
              onClick={() => {
                setPopup(!popup);
              }}
            />
            {popup && (
              <div className="w-[12rem] overflow-hidden rounded-lg flex justify-between flex-col right-0 top-14 bg-[#fcfcfc] absolute">
                <div className="border-b border-[#ccc4c4] cursor-not-allowed">
                  <p className="mt-1 px-4 py-2.5 text-[#aca9a9] font-jura">
                    {user.firstname + " " + user.lastname}
                  </p>
                </div>
                <div className="flex items-center px-4 py-3 space-x-3 border-b border-[#f4f0f0] hover:bg-[#ebeaea]"
                onClick={() => {
                  router("/profile");
                }}>
                  <img src={profile_dropdown} alt="" />
                  <p className="font-jura text-[#2E4E44]">
                    Profile
                  </p>
                </div>
                <div
                  className="flex items-center pb-4 px-4 py-3 space-x-3 hover:bg-[#ebeaea]"
                  onClick={() => {
                    localStorage.removeItem("user_id");
                    router("/");
                  }}
                >
                  <img src={logout_dropdown} alt="" />
                  <p className="font-jura text-[#2E4E44]">Logout</p>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
  return (
    <nav className="w-full flex justify-center absolute top-0 z-10">
      <NavbarItem />
    </nav>
  );
}
