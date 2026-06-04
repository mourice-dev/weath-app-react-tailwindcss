/** @format */
/** @format */

import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import unit from "../assets/images/icon-units.svg";
import dropdown from "../assets/images/icon-dropdown.svg";
import checkmark from "../assets/images/icon-checkmark.svg";

interface HeaderProps {
  weatherData: any;
  tempUnit: "celsius" | "fahrenheit";
  setTempUnit: (unit: "celsius" | "fahrenheit") => void;
  windUnit: "kmh" | "mph";
  setWindUnit: (unit: "kmh" | "mph") => void;
  precipUnit: "mm" | "inch";
  setPrecipUnit: (unit: "mm" | "inch") => void;
}

function Header({
  weatherData,
  tempUnit,
  setTempUnit,
  windUnit,
  setWindUnit,
  precipUnit,
  setPrecipUnit,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Quick toggle helper for the entire system
  const isAllImperial =
    tempUnit === "fahrenheit" && windUnit === "mph" && precipUnit === "inch";

  const handleToggleSystem = () => {
    if (isAllImperial) {
      setTempUnit("celsius");
      setWindUnit("kmh");
      setPrecipUnit("mm");
    } else {
      setTempUnit("fahrenheit");
      setWindUnit("mph");
      setPrecipUnit("inch");
    }
  };

  return (
    <div className='flex justify-between items-center text-center text-white'>
      <div>
        <img src={logo} alt='' className='h-8' />
      </div>
      <div className='relative flex items-center text-center justify-center  bg-Neutral-700 rounded-md cursor-pointer'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=' flex items-center text-center justify-center font-semibold text-xs px-2 py-2 gap-2 cursor-pointer'>
          <img src={unit} alt='' className='h-3' /> Units
          <img src={dropdown} alt='' />
        </button>
        <div
          className={` ${isOpen ? "block " : "hidden"}  absolute bg-Neutral-800 flex p-1  z-5 flex-col justify-start items-center text-left w-40 min-h-10 border-1 border-Neutral-600 right-0 mr-1 top-0 -translate-y-20 mt-30 rounded-md z-3 cursor-pointer`}>
          <p
            onClick={handleToggleSystem}
            className=' bg-Neutral-800 hover:bg-Neutral-700 w-full py-2 px-2 text-xs text-white rounded-md text-center select-none cursor-pointer'>
            Switch to {isAllImperial ? "Metric" : "Imperial"}
          </p>
          <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs text-gray-500 rounded-md cursor-default'>
            Temperature
          </p>
          <div className='flex flex-col justify-start items-center text-left w-full border-b-1 border-Neutral-600'>
            {/* Celsius Button */}
            <div
              onClick={() => setTempUnit("celsius")}
              className={` flex justify-between items-center text-center w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md cursor-pointer ${
                tempUnit === "celsius" ? "bg-Neutral-700" : "bg-Neutral-800"
              }`}>
              <p className=''>Celsius (&deg;C)</p>
              {tempUnit === "celsius" && <img src={checkmark} alt='' className='w-3' />}
            </div>
            {/* Fahrenheit Button */}
            <div
              onClick={() => setTempUnit("fahrenheit")}
              className={` flex justify-between items-center text-center w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md cursor-pointer ${
                tempUnit === "fahrenheit" ? "bg-Neutral-700" : "bg-Neutral-800"
              }`}>
              <p>Fahrenheit (&deg;F)</p>
              {tempUnit === "fahrenheit" && <img src={checkmark} alt='' className='w-3' />}
            </div>
          </div>
          <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs text-gray-500 rounded-md cursor-default'>
            Wind Speed
          </p>
          <div className='flex flex-col justify-start items-center text-left w-full border-b-1 border-Neutral-600'>
            {/* Km/h Button */}
            <div
              onClick={() => setWindUnit("kmh")}
              className={` flex justify-between items-center text-center w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md cursor-pointer ${
                windUnit === "kmh" ? "bg-Neutral-700" : "bg-Neutral-800"
              }`}>
              <p className=''>Km/h</p>
              {windUnit === "kmh" && <img src={checkmark} alt='' className='w-3' />}
            </div>
            {/* mph Button */}
            <div
              onClick={() => setWindUnit("mph")}
              className={` flex justify-between items-center text-center w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md cursor-pointer ${
                windUnit === "mph" ? "bg-Neutral-700" : "bg-Neutral-800"
              }`}>
              <p>mph</p>
              {windUnit === "mph" && <img src={checkmark} alt='' className='w-3' />}
            </div>
          </div>
          <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs text-gray-500 rounded-md cursor-default'>
            Precipitation
          </p>
          <div className='flex flex-col justify-start items-center text-left w-full'>
            {/* Millimeters Button */}
            <div
              onClick={() => setPrecipUnit("mm")}
              className={` flex justify-between items-center text-center w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md cursor-pointer ${
                precipUnit === "mm" ? "bg-Neutral-700" : "bg-Neutral-800"
              }`}>
              <p className=''>Millimeters (mm)</p>
              {precipUnit === "mm" && <img src={checkmark} alt='' className='w-3' />}
            </div>
            {/* Inches Button */}
            <div
              onClick={() => setPrecipUnit("inch")}
              className={` flex justify-between items-center text-center w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md cursor-pointer ${
                precipUnit === "inch" ? "bg-Neutral-700" : "bg-Neutral-800"
              }`}>
              <p>Inches (in)</p>
              {precipUnit === "inch" && <img src={checkmark} alt='' className='w-3' />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;