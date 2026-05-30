/** @format */

import React from "react";
import Grid from "./Grid";
import search from "./assets/images/icon-search.svg";
import loading from "./assets/images/icon-loading.svg";

function Body() {
  const searchingBar = document.getElementById("searchingBar");
  const historyItems = document.getElementById("historyItems");
  searchingBar?.addEventListener("click", () => {
    if(historyItems.classList.contains("hidden")){
    historyItems?.classList.remove("hidden");
  }
  else{
    historyItems?.classList.add("hidden");
    
  }
  });



  return (
    <div className='flex-col justify-center items-center text-center'>
      <div>
        <p className='text-white font-bold text-4xl'>
          How's the sky looking today?
        </p>
      </div>
      <div className='pt-8'>
        <div className='md:flex justify-center items-center text-center gap-4'>
          <div 
            id="searchingBar"
            className='relative flex justify-between 
                  items-center text-center gap-3
                   bg-Neutral-700 py-2   md:px-5
                   md:w-[350px]
                   focus-within:ring-1
                   focus-within:ring-white
                   focus-within:border-white
                    rounded-md'>
            <img src={search} alt='' className='ml-2 md:ml-0 h-4' />
            <input
              type='text'
              name=''
              placeholder='Search for a place...'
              id=''
              className='bg-transparent outline-none text-white 
                          placeholder:text-Neutral-300 w-full text-sm'
            />
            {/* <div className=' absolute flex justify-start items-center text-center w-full h-10 bg-Neutral-700 left-0 mt-23 rounded-md z-3'>
              <img src={loading} alt='' className='h-4 px-2' />{" "}
              <p className='text-xs text-white'>Searching in progress...</p>
            // </div> */}
            <div
              id="historyItems"
              className=' hidden absolute bg-Neutral-700 flex p-1 flex-col justify-start items-center text-left w-full min-h-10 bg-Neutral-700 left-0 mt-30 rounded-md z-3 cursor-pointer'>
              <p className=' bg-Neutral-700 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
                Kigali
              </p>
              <p className=' bg-Neutral-700 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
                Canada
              </p>
            </div>
          </div>

          <div
            className='bg-blue-500 rounded-md text-white cursor-pointer mt-3 md:mt-0
           
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
