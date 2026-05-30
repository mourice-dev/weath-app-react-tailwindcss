/** @format */

import React from "react";
import logo from "../assets/images/logo.svg";
import unit from "../assets/images/icon-units.svg";
import dropdown from "../assets/images/icon-dropdown.svg";
import checkmark from "../assets/images/icon-checkmark.svg";

function Header() {


  
  return (
    <div className='flex justify-between items-center text-center text-white'>
      <div>
        <img src={logo} alt='' className='h-8' />
      </div>
      <div className='relative flex items-center text-center justify-center  bg-Neutral-700 rounded-md cursor-pointer'>
        <button className=' flex items-center text-center justify-center font-semibold text-xs px-2 py-2 gap-2 cursor-pointer'>
          <img src={unit} alt='' className='h-3' /> Units
          <img src={dropdown} alt='' />
        </button>
        <div className=' absolute bg-Neutral-800 flex p-1  z-5 flex-col justify-start items-center text-left w-40 min-h-10 border-1 border-Neutral-600 right-0 mr-1 top-0 -translate-y-20 mt-30 rounded-md z-3 cursor-pointer'>
          <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs text-white rounded-md cursor-default'>
            Switch to Imperial
          </p>
          <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs text-gray-500 rounded-md cursor-default'>
            Temperature
          </p>
          <div className='flex flex-col justify-start items-center text-left w-full border-b-1 border-Neutral-600'>
            <div className=' flex justify-between items-center text-center bg-Neutral-700 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
              <p className=''>Celsius (&deg;C)</p>
              <img src={checkmark} alt='' className='w-3' />
            </div>
            <div className=' flex justify-between items-center text-center bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
              <p>Fahrenheit (&deg;F)</p>
              {/* <img src={checkmark} alt='' className='w-3' /> */}
            </div>
          </div>
          <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs text-gray-500 rounded-md cursor-default'>
            Wind Speed
          </p>
          <div className='flex flex-col justify-start items-center text-left w-full border-b-1 border-Neutral-600'>
            <div className=' flex justify-between items-center text-center bg-Neutral-700 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
              <p className=''>Km/h</p>
              <img src={checkmark} alt='' className='w-3' />
            </div>
            <div className=' flex justify-between items-center text-center bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
              <p>mph</p>
              {/* <img src={checkmark} alt='' className='w-3' /> */}
            </div>
          </div>
          <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs text-gray-500 rounded-md cursor-default'>
            Precipitation
          </p>
          <div className='flex flex-col justify-start items-center text-left w-full'>
            <div className=' flex justify-between items-center text-center bg-Neutral-700 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
              <p className=''>Millimeters (mm)</p>
              <img src={checkmark} alt='' className='w-3' />
            </div>
            <div className=' flex justify-between items-center text-center bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
              <p>Inches (in)</p>
              {/* <img src={checkmark} alt='' className='w-3' /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
