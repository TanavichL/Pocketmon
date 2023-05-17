import React, { useRef, useEffect, useState } from "react";
import { gsap, TweenMax } from "gsap";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import background from "../assets/background-homepage.svg";
import balloon from "../assets/balloon.svg";
import grass from "../assets/background-grass.svg";
import icon_fb from "../assets/icon8/icons8-facebook-256 1.svg";
import icon_ig from "../assets/icon8/icons8-instagram-100 (1).svg";
import icon_tw from "../assets/icon8/icons8-twitter-100.svg";
import icon_yt from "../assets/icon8/icons8-youtube-100.svg";
import icon_pocket from "../assets/icon8/image 69.svg";
function Homepage() {
  let test = useRef(null);
  useEffect(() => {
    var tl = gsap.timeline({ yoyo: true, repeat: -1 });
    tl.to(test, { x: 30, y: -70, duration: 6 });
  });
  return (
    <div id="homepage" className="min-h-screen overflow-x-hidden bg-[#E6F2FD]">
      <NavigationBar />
      <div className="w-full min-h-screen">
        <div className="w-full flex justify-center items-center relative">
          <img
            id="test"
            ref={(el) => {
              test = el;
            }}
            className="right-0 top-0 absolute"
            src={balloon}
            alt=""
          />
          <div className="w-[85%] absolute">
            <div className="mb-[35rem]">
              <p className="leading-[5rem] mb-[5rem] text-6xl font-lexend select-none">
                Let's make <br />
                Financial planning <br />
                Starts here.
              </p>
              <Link
                to={"/dashboard"}
                className="bg-[#07636B] font-jura font-semibold text-lg text-white px-6 py-3.5 rounded-xl"
              >
                Getting Started
              </Link>
            </div>
          </div>
          <img src={background} className="mt-[6rem] w-full" alt="" />
        </div>
        <div className="w-full absolute flex justify-center z-10">
          <div className="w-[70%]">
            <div id="about" className="absolute">
              <div className="text-4xl font-lexend w-40 border-b-4 pb-2 border-[#07636B]">
                About us
              </div>
              <div className="font-jura text-2xl tracking-wider mt-10">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our team
                is made up of experienced software developers, and customer
                <br /> support specialists. We work closely together to create
                innovative solutions that
                <br /> simplify the process of managing your money.
              </div>
              <div className="font-jura text-2xl tracking-wider mt-10">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At our core, we believe that everyone should have access to
                high-quality<br /> financial management tools, regardless of their
                income or background. That's why<br /> we've designed our products to
                be easy to use and affordable for everyone.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <img src={grass} className="w-full" alt="" />
          <div className="w-full absolute bottom-[5rem] flex justify-center">
            <div className="w-[85%] flex justify-between">
              <div id="contact" className="flex font-jura flex-col">
                <p className="font-semibold text-4xl">CONTACT US</p>
                <div className="collaborate py-4 text-xl">
                  <p>Phufa Rujipatsawat</p>
                  <p>Wongsapat Asavawongsanon</p>
                  <p>Tanavich Leksana</p>
                </div>
                <div className="flex space-x-3">
                  <img src={icon_fb} alt="" />
                  <img src={icon_ig} alt="" />
                  <img src={icon_tw} alt="" />
                  <img src={icon_yt} alt="" />
                </div>
              </div>
              <div className="h-full flex items-end">
                <div className="font-jura space-y-4 text-right">
                  <div className="flex justify-end items-center font-jura">
                    <p className="text-3xl">Pocketmon</p>
                    <img src={icon_pocket} alt="" />
                  </div>
                  <p className="text-xl">
                    FAQ | Terms of Use | Privacy Statement
                  </p>
                  <p className="text-xl">
                    © 2023 POCKETMON. ALL RIGHTS RESERVED.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
