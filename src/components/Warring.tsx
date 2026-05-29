/** @format */

import React from "react";
import error from "../assets/images/icon-error.svg";
import retry from "../assets/images/icon-retry.svg";

function Warring() {
  return (
    <div className='flex-col justify-center items-center text-center text-white'>
      <div className='flex justify-center items-center'>
        {" "}
        <img src={error} alt='' className='h-8' />
      </div>
      <div className='flex justify-center text-center items-center'>
        <div className=' py-5 '>
          
          <p className='font-bold text-4xl'>Something went worng</p>
          <div className=" flex justify-center items-center text-center mt-5">
          <div className=" flex justify-center text-center items-center  w-87">
            <p className='text-sm text-center'>
            we couldn't connect to the server(API error.) Please try again in a
            few moments.
          </p>
            </div>
          </div>
          
          <div className='flex items-center justify-center text-center pt-4'>
            <div className=' flex items-center text-center justify-center  bg-Neutral-600 rounded-md cursor-pointer'>
              <button className=' flex items-center text-center justify-center font-semibold text-xs px-2 py-2 gap-2 cursor-pointer'>
                <img src={retry} alt='' className='h-3' /> Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Warring;
