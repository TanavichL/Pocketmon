import React from 'react'
import logo from "../assets/pocket-logo.svg"

export default function NavigationBar() {
  return (
    <nav className='w-full flex justify-center absolute top-0'>
      <div className="w-[85%] h-20 flex justify-between items-center bg-transparent">
        <div id="logo" className="flex">
            <img src={logo} alt="" />
            <p className='text-xl font-jura font-semibold text-[#0048B5]'>Pocket<span className='text-black'>mon</span></p>
        </div>
        <div id="navbar-item-list" className="space-x-6">
            <a href="" className='font-jura font-medium'>HOME</a>
            <a href="" className='font-jura font-medium'>ABOUT</a>
            <a href="" className='font-jura font-medium'>CONTACT</a>
        </div>
        <div id="group-button" className="flex items-center space-x-4">
            <button type="submit" className='px-4 py-1 rounded-md text-center font-jura text-black bg-white'>SignIn</button>
            <button type="submit" className='px-4 py-1 rounded-md text-center font-jura text-white bg-[#07636B]'>SignUp</button>
        </div>
      </div>
    </nav>
  )
}

