/** @format */

import React from "react";
import Today from "../src/assets/images/bg-today-large.svg";
import dropdown from "../src/assets/images/icon-dropdown.svg";
import overcast from "../src/assets/images/icon-overcast.webp";
import rain from "../src/assets/images/icon-rain.webp";

function Grid() {
  return (
    <div className='grid grid-cols-3 gap-6 mt-7'>
      <div className='flex-col col-span-2'>
        <div className='overflow-hidden rounded-xl'>
          <img src={Today} alt='' className='w-full object-cover h-50' />
        </div>

        <div className='flex justify-center gap-5 items-center mt-5 text-white '>
          <div className='bg-Neutral-800 border-1 text-left p-2 border-Neutral-600 rounded-xl w-40'>
            <p className='text-xs'>Feels Like</p>
            <p className='text-2xl mt-3'>
              18&deg;
            </p>
          </div>
          <div className='bg-Neutral-800 border-1 text-left p-2 border-Neutral-600 rounded-xl w-40'>
            <p className='text-xs'>Humidity</p>
            <p className='text-2xl mt-3'>46%</p>
          </div>
          <div className='bg-Neutral-800 border-1 text-left p-2 border-Neutral-600 rounded-xl w-40'>
            <p className='text-xs'>Wind</p>
            <p className='text-2xl mt-3'>14 Km/h</p>
          </div>
          <div className='bg-Neutral-800 border-1 text-left p-2 border-Neutral-600 rounded-xl w-40'>
            <p className='text-xs'>Percipition</p>
            <p className='text-2xl mt-3'>0 mm</p>
          </div>
        </div>
        <div className="mt-8">
          <div className='text-left text-white text-sm mb-4'>
            <p> Daily forecast</p>
          </div>
          <div className='flex justify-between'>
            <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
              <p className='text-xs p-2'>Tue</p>
              <div className='flex justify-center items-center'>
                {" "}
                <img src={rain} alt='' className='h-10' />
              </div>
              <div className='flex justify-between items-center text-center gap-6 px-2  py-3 '>
                <p className='text-xs'>
                  20&deg;
                </p>

                <p className='text-xs'>
                  14&deg;
                </p>
              </div>
            </div>
            <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
              <p className='text-xs p-2'>Tue</p>
              <div className='flex justify-center items-center'>
                {" "}
                <img src={rain} alt='' className='h-10' />
              </div>
              <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                <p className='text-xs'>
                  20&deg;
                </p>

                <p className='text-xs'>
                  14&deg;
                </p>
              </div>
            </div>{" "}
            <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
              <p className='text-xs p-2'>Tue</p>
              <div className='flex justify-center items-center'>
                {" "}
                <img src={rain} alt='' className='h-10' />
              </div>
              <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                <p className='text-xs'>
                  20&deg;
                </p>

                <p className='text-xs'>
                  14&deg;
                </p>
              </div>
            </div>{" "}
            <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
              <p className='text-xs p-2'>Tue</p>
              <div className='flex justify-center items-center'>
                {" "}
                <img src={rain} alt='' className='h-10' />
              </div>
              <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                <p className='text-xs'>
                  20&deg;
                </p>

                <p className='text-xs'>
                  14&deg;
                </p>
              </div>
            </div>{" "}
            <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
              <p className='text-xs p-2'>Tue</p>
              <div className='flex justify-center items-center'>
                {" "}
                <img src={rain} alt='' className='h-10' />
              </div>
              <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                <p className='text-xs'>
                  20&deg;
                </p>

                <p className='text-xs'>
                  14&deg;
                </p>
              </div>
            </div>{" "}
            <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
              <p className='text-xs p-2'>Tue</p>
              <div className='flex justify-center items-center'>
                {" "}
                <img src={rain} alt='' className='h-10' />
              </div>
              <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                <p className='text-xs'>
                  20&deg;
                </p>

                <p className='text-xs'>
                  14&deg;
                </p>
              </div>
            </div>{" "}
            <div className='bg-Neutral-800   border-1 items-center text-center  text-white  border-Neutral-600 rounded-xl'>
              <p className='text-xs p-2'>Tue</p>
              <div className='flex justify-center items-center'>
                {" "}
                <img src={rain} alt='' className='h-10' />
              </div>
              <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                <p className='text-xs'>
                  20&deg;
                </p>

                <p className='text-xs'>
                  14&deg; 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-1 bg-Neutral-800 h-120 rounded-xl text-white '>
        <div className='flex justify-between text-center text-sm mx-4 mt-5 mb-4'>
          <p className='  '>Hourly forecast</p>
          <div className=' bg-Neutral-700 rounded-md  cursor-pointer'>
            <button className='flex justify-center items-center text-center gap-2 px-3 py-1 cursor-pointer'>
              Tuesday
              <img src={dropdown} alt='' className='flex w-4' />
            </button>
          </div>
        </div>
        <div className='h-100 overflow-y-auto scrollbar '>
          <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
            <div className='flex justify-center items-center text-center gap-1'>
              <img src={overcast} alt='' className=' h-7' />
              <p>3 PM</p>
            </div>
            <p className='text-sm'>
              20&deg;
            </p>
          </div>
          <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
            <div className='flex justify-center items-center text-center gap-1'>
              <img src={overcast} alt='' className=' h-7' />
              <p>3 PM</p>
            </div>
            <p className='text-sm'>
              20&deg;
            </p>
          </div>{" "}
          <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
            <div className='flex justify-center items-center text-center gap-1'>
              <img src={overcast} alt='' className=' h-7' />
              <p>3 PM</p>
            </div>
            <p className='text-sm'>
              20&deg;
            </p>
          </div>{" "}
          <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
            <div className='flex justify-center items-center text-center gap-1'>
              <img src={overcast} alt='' className=' h-7' />
              <p>3 PM</p>
            </div>
            <p className='text-sm'>
              20&deg;
            </p>
          </div>{" "}
          <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
            <div className='flex justify-center items-center text-center gap-1'>
              <img src={overcast} alt='' className=' h-7' />
              <p>3 PM</p>
            </div>
            <p className='text-sm'>
              20&deg;
            </p>
          </div>{" "}
          <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
            <div className='flex justify-center items-center text-center gap-1'>
              <img src={overcast} alt='' className=' h-7' />
              <p>3 PM</p>
            </div>
            <p className='text-sm'>
              20&deg;
            </p>
          </div>{" "}
          <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
            <div className='flex justify-center items-center text-center gap-1'>
              <img src={overcast} alt='' className=' h-7' />
              <p>3 PM</p>
            </div>
            <p className='text-sm'>
              20&deg;
            </p>
          </div>{" "}
          <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
            <div className='flex justify-center items-center text-center gap-1'>
              <img src={overcast} alt='' className=' h-7' />
              <p>3 PM</p>
            </div>
            <p className='text-sm'>
              20&deg;
            </p>
          </div>{" "}
          <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
            <div className='flex justify-center items-center text-center gap-1'>
              <img src={overcast} alt='' className=' h-7' />
              <p>3 PM</p>
            </div>
            <p className='text-sm'>
              20&deg;
            </p>
          </div>{" "}
          <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
            <div className='flex justify-center items-center text-center gap-1'>
              <img src={overcast} alt='' className=' h-7' />
              <p>3 PM</p>
            </div>
            <p className='text-sm'>
              20&deg;
            </p>
          </div>{" "}
          <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
            <div className='flex justify-center items-center text-center gap-1'>
              <img src={overcast} alt='' className=' h-7' />
              <p>3 PM</p>
            </div>
            <p className='text-sm'>
              20&deg;
            </p>
          </div>{" "}
          <div className=' flex justify-between items-center  mx-4 mt-2 px-3 text-center text-sm  bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
            <div className='flex justify-center items-center text-center gap-1'>
              <img src={overcast} alt='' className=' h-7' />
              <p>3 PM</p>
            </div>
            <p className='text-sm'>
              20&deg;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
