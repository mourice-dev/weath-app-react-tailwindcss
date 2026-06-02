/** @format */

import React from "react";
import Today from "../src/assets/images/bg-today-large.svg";
import dropdown from "../src/assets/images/icon-dropdown.svg";
import overcast from "../src/assets/images/icon-overcast.webp";
import rain from "../src/assets/images/icon-rain.webp";
import sun from "../src/assets/images/icon-sunny.webp";
import { useState } from "react";

interface GridProps {
  weatherData?: any;
  city?: any;
}

function Grid({ weatherData, city }: GridProps) {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div>
      {/* <div className='flex justify-center items-center text-center mt-15'>
        <p className='text-white text-md font-bold tracking-wide'>
          No search result found!
        </p>
      </div> */}
      <div className='md:grid grid-cols-3 gap-6 mt-7'>
        <div className='flex-col col-span-2'>
          <div className=' relative flex justify-between items-center overflow-hidden rounded-xl'>
            <div className='absolute flex flex-col md:flex-row md:justify-between w-full items-center text-center text-white px-5'>
              <div className='flex flex-col justify-center items-center  text-left'>
                <p className='text-xl font-semibold'>{city.name}, {city.country}</p>
                <p className='text-xs block'>Tuesday, Aug 5, 2025</p>
              </div>
              <div className='flex justify-center items-center text-center '>
                <img src={sun} alt='' className='h-20' />
                <p className='text-7xl font-semibold'>{weatherData.current.temperature_2m}&deg;</p>
              </div>
            </div>
            <img src={Today} alt='' className='w-full object-cover h-50' />
          </div>

          <div className=' grid  grid-cols-2 gap-5 md:flex justify-between items-center mt-5 text-white '>
            <div className='bg-Neutral-800 border-1 text-left p-2 border-Neutral-600 rounded-xl lg:w-40'>
              <p className='text-xs'>Feels Like</p>
              <p className='text-2xl mt-3'>18&deg;</p>
            </div>
            <div className='bg-Neutral-800 border-1 text-left p-2 border-Neutral-600 rounded-xl lg:w-40'>
              <p className='text-xs'>Humidity</p>
              <p className='text-2xl mt-3'>46%</p>
            </div>
            <div className='bg-Neutral-800 border-1 text-left p-2 border-Neutral-600 rounded-xl lg:w-40'>
              <p className='text-xs'>Wind</p>
              <p className='text-2xl mt-3'>14 Km/h</p>
            </div>
            <div className='bg-Neutral-800 border-1 text-left p-2 border-Neutral-600 rounded-xl lg:w-40'>
              <p className='text-xs'>Percipition</p>
              <p className='text-2xl mt-3'>0 mm</p>
            </div>
          </div>
          <div className='mt-8'>
            <div className='text-left text-white text-sm mb-4'>
              <p> Daily forecast</p>
            </div>
            <div className=' grid grid-cols-3 gap-4 md:grid-cols-7  justify-between'>
              <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
                <p className='text-xs p-2'>Tue</p>
                <div className='flex justify-center items-center'>
                  {" "}
                  <img src={rain} alt='' className='h-10' />
                </div>
                <div className='flex justify-between items-center text-center gap-6 px-2  py-3 '>
                  <p className='text-xs'>20&deg;</p>

                  <p className='text-xs'>14&deg;</p>
                </div>
              </div>
              <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
                <p className='text-xs p-2'>Tue</p>
                <div className='flex justify-center items-center'>
                  {" "}
                  <img src={rain} alt='' className='h-10' />
                </div>
                <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                  <p className='text-xs'>20&deg;</p>

                  <p className='text-xs'>14&deg;</p>
                </div>
              </div>{" "}
              <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
                <p className='text-xs p-2'>Tue</p>
                <div className='flex justify-center items-center'>
                  {" "}
                  <img src={rain} alt='' className='h-10' />
                </div>
                <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                  <p className='text-xs'>20&deg;</p>

                  <p className='text-xs'>14&deg;</p>
                </div>
              </div>{" "}
              <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
                <p className='text-xs p-2'>Tue</p>
                <div className='flex justify-center items-center'>
                  {" "}
                  <img src={rain} alt='' className='h-10' />
                </div>
                <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                  <p className='text-xs'>20&deg;</p>

                  <p className='text-xs'>14&deg;</p>
                </div>
              </div>{" "}
              <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
                <p className='text-xs p-2'>Tue</p>
                <div className='flex justify-center items-center'>
                  {" "}
                  <img src={rain} alt='' className='h-10' />
                </div>
                <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                  <p className='text-xs'>20&deg;</p>

                  <p className='text-xs'>14&deg;</p>
                </div>
              </div>{" "}
              <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
                <p className='text-xs p-2'>Tue</p>
                <div className='flex justify-center items-center'>
                  {" "}
                  <img src={rain} alt='' className='h-10' />
                </div>
                <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                  <p className='text-xs'>20&deg;</p>

                  <p className='text-xs'>14&deg;</p>
                </div>
              </div>{" "}
              <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
                <p className='text-xs p-2'>Tue</p>
                <div className='flex justify-center items-center'>
                  {" "}
                  <img src={rain} alt='' className='h-10' />
                </div>
                <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                  <p className='text-xs'>20&deg;</p>

                  <p className='text-xs'>14&deg;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8 md:mt-0 col-span-1 bg-Neutral-800 h-120 rounded-xl text-white '>
          <div className='flex justify-between text-center text-sm mx-4 pt-5 mb-4'>
            <p className='  '>Hourly forecast</p>
            <div className='relative bg-Neutral-700 rounded-md  cursor-pointer'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='flex justify-center items-center text-center gap-2 px-3 py-1 cursor-pointer'>
                Tuesday
                <img src={dropdown} alt='' className='flex w-4' />
              </button>
              <div
                className={` ${isOpen? "block" : "hidden"} absolute bg-Neutral-800 flex p-1 flex-col justify-start items-center text-left w-40 min-h-10 border-1 border-Neutral-600 right-0 mr-1 top-0 -translate-y-20 mt-30 rounded-md z-3 cursor-pointer`}>
                <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
                  Monday
                </p>
                <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
                  Tuesday
                </p>
                <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
                  Wednesday
                </p>
                <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
                  Thursday
                </p>

                <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
                  Friday
                </p>
                <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
                  Saturday
                </p>
                <p className=' bg-Neutral-800 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
                  Sunday
                </p>
              </div>
            </div>
          </div>
          <div className='h-100 overflow-y-auto scrollbar '>
            <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
              <div className='flex justify-center items-center text-center gap-1'>
                <img src={overcast} alt='' className=' h-7' />
                <p>3 PM</p>
              </div>
              <p className='text-sm'>20&deg;</p>
            </div>
            <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
              <div className='flex justify-center items-center text-center gap-1'>
                <img src={overcast} alt='' className=' h-7' />
                <p>3 PM</p>
              </div>
              <p className='text-sm'>20&deg;</p>
            </div>{" "}
            <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
              <div className='flex justify-center items-center text-center gap-1'>
                <img src={overcast} alt='' className=' h-7' />
                <p>3 PM</p>
              </div>
              <p className='text-sm'>20&deg;</p>
            </div>{" "}
            <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
              <div className='flex justify-center items-center text-center gap-1'>
                <img src={overcast} alt='' className=' h-7' />
                <p>3 PM</p>
              </div>
              <p className='text-sm'>20&deg;</p>
            </div>{" "}
            <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
              <div className='flex justify-center items-center text-center gap-1'>
                <img src={overcast} alt='' className=' h-7' />
                <p>3 PM</p>
              </div>
              <p className='text-sm'>20&deg;</p>
            </div>{" "}
            <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
              <div className='flex justify-center items-center text-center gap-1'>
                <img src={overcast} alt='' className=' h-7' />
                <p>3 PM</p>
              </div>
              <p className='text-sm'>20&deg;</p>
            </div>{" "}
            <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
              <div className='flex justify-center items-center text-center gap-1'>
                <img src={overcast} alt='' className=' h-7' />
                <p>3 PM</p>
              </div>
              <p className='text-sm'>20&deg;</p>
            </div>{" "}
            <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
              <div className='flex justify-center items-center text-center gap-1'>
                <img src={overcast} alt='' className=' h-7' />
                <p>3 PM</p>
              </div>
              <p className='text-sm'>20&deg;</p>
            </div>{" "}
            <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
              <div className='flex justify-center items-center text-center gap-1'>
                <img src={overcast} alt='' className=' h-7' />
                <p>3 PM</p>
              </div>
              <p className='text-sm'>20&deg;</p>
            </div>{" "}
            <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
              <div className='flex justify-center items-center text-center gap-1'>
                <img src={overcast} alt='' className=' h-7' />
                <p>3 PM</p>
              </div>
              <p className='text-sm'>20&deg;</p>
            </div>{" "}
            <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
              <div className='flex justify-center items-center text-center gap-1'>
                <img src={overcast} alt='' className=' h-7' />
                <p>3 PM</p>
              </div>
              <p className='text-sm'>20&deg;</p>
            </div>{" "}
            <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
              <div className='flex justify-center items-center text-center gap-1'>
                <img src={overcast} alt='' className=' h-7' />
                <p>3 PM</p>
              </div>
              <p className='text-sm'>20&deg;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
