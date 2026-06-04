/** @format */

import React from "react";
import Header from "./components/Header";
import Body from "./Body";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [city, setCity] = useState<any | null>(null);
  const [tempUnit, setTempUnit] = useState<"celsius" | "fahrenheit">("celsius");
  const [windUnit, setWindUnit] = useState<"kmh" | "mph">("kmh");
  const [precipUnit, setPrecipUnit] = useState<"mm" | "inch">("mm");

  return (
    <div className=' bg-Neutral-900 min-h-screen'>
      <div className='flex-col justify-center items-center items-center mx-5 md:mx-50 pt-6'>
        <Header
          weatherData={weatherData}
          tempUnit={tempUnit}
          setTempUnit={setTempUnit}
          windUnit={windUnit}
          setWindUnit={setWindUnit}
          precipUnit={precipUnit}
          setPrecipUnit={setPrecipUnit}
        />
        <div className='mt-5 pb-8'>
          <Body
            weatherData={weatherData}
            setWeatherData={setWeatherData}
            city={city}
            setCity={setCity}
            tempUnit={tempUnit}
            windUnit={windUnit}
            precipUnit={precipUnit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
