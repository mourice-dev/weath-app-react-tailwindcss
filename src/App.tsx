/** @format */

import React, { useEffect } from "react";
import Header from "./components/Header";
import Warring from "./components/Warring";
import Body from "./Body";

function App() {

  // useEffect(() => {
  //   fetch(
  //     "https://geocoding-api.open-meteo.com/v1/search?name=kigali&count=10&language=en&format=json",
  //   );
  // })

  return (
    <div className=' bg-Neutral-900 min-h-screen'>
      <div className='flex-col justify-center items-center items-center mx-5 md:mx-50 pt-6'>
        <Header />
        <div className='mt-5 pb-8'>
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
