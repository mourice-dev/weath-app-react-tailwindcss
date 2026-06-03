/** @format */

import React, { useEffect } from "react";
import Header from "./components/Header";
import Warring from "./components/Warring";
import Body from "./Body";
import { useState } from "react";

function App() {
 const [weatherData, setWeatherData] = useState<any | null>(null);
 
  return (
    <div className=' bg-Neutral-900 min-h-screen'>
      <div className='flex-col justify-center items-center items-center mx-5 md:mx-50 pt-6'>
        <Header weatherData={weatherData}/>
        <div className='mt-5 pb-8'>
          <Body weatherData={weatherData} setWeatherData={setWeatherData} />
        </div>
      </div>
    </div>
  );
}

export default App;
