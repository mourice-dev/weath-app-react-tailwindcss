/** @format */

import React from "react";
import Grid from "./Grid";
import search from "./assets/images/icon-search.svg";

function Body() {
  return (
    <div className='flex-col justify-center items-center text-center'>
      <div>
        <p className='text-white font-bold text-4xl'>
          How's the sky looking today?
        </p>
      </div>
      <div className='pt-8'>
        <div className='flex justify-center items-center text-center gap-4'>
          <div
            className='flex justify-between 
                  items-center text-center gap-3
                   bg-Neutral-700 py-2   px-5
                   w-[350px]
                   focus-within:ring-1
                   focus-within:ring-white
                   focus-within:border-white
                    rounded-md'>
            <img src={search} alt='' className='h-4' />
            <input
              type='text'
              name=''
              placeholder='Search for a place...'
              id=''
              className='bg-transparent outline-none text-white 
                          placeholder:text-Neutral-300 w-full text-sm'
            />
          </div>

          <div
            className='bg-blue-500 rounded-md text-white cursor-pointer
          '>
            <button className='text-sm py-2 px-3 cursor-pointer '>
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <Grid />
      </div>
    </div>
  );
}

export default Body;
