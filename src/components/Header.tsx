/** @format */

import React from "react";
import logo from "../assets/images/logo.svg";
import unit from "../assets/images/icon-units.svg";
import dropdown from "../assets/images/icon-dropdown.svg";

function Header() {
  return (
    <div className='flex justify-between items-center text-center text-white'>
      <div>
        <img src={logo} alt='' className='h-8' />
      </div>
      <div className=' flex items-center text-center justify-center  bg-Neutral-700 rounded-md cursor-pointer'>
        <button className=' flex items-center text-center justify-center font-semibold text-xs px-2 py-2 gap-2 cursor-pointer'>
          <img src={unit} alt="" className="h-3" /> Units
          <img src={dropdown} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Header;
