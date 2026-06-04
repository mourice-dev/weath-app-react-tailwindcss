/** @format */
/** @format */

import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import search from "./assets/images/icon-search.svg";
import loading from "./assets/images/icon-loading.svg";

interface weatherDataProps {
  weatherData: any;
  setWeatherData: React.Dispatch<React.SetStateAction<any>>;
  city: any;
  setCity: React.Dispatch<React.SetStateAction<any>>;
  tempUnit: "celsius" | "fahrenheit";
  windUnit: "kmh" | "mph";
  precipUnit: "mm" | "inch";
}

function Body({
  weatherData,
  setWeatherData,
  city,
  setCity,
  tempUnit,
  windUnit,
  precipUnit,
}: weatherDataProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  // Re-fetch weather forecast whenever city coordinates or selected units change
  useEffect(() => {
    if (city && city.latitude && city.longitude) {
      const fetchWeatherData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&temperature_unit=${tempUnit}&wind_speed_unit=${windUnit}&precipitation_unit=${precipUnit}`,
          );
          const res = await response.json();
          setWeatherData(res);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchWeatherData();
    }
  }, [city, tempUnit, windUnit, precipUnit, setWeatherData]);

  const handleSubmit = async () => {
    setIsOpen(false);
    setIsLoading(true);
    try {
      const result = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`,
      );
      const data = await result.json();
      const place = data.results?.[0];
      if (place) {
        setCity({
          name: place.name,
          country: place.country,
          latitude: place.latitude,
          longitude: place.longitude,
        });
      } else {
        setCity(null);
        setWeatherData(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex-col justify-center items-center text-center'>
      <div>
        <p className='text-white font-bold text-4xl'>
          How's the sky looking today?
        </p>
      </div>
      <form action={handleSubmit}>
        <div className='pt-8'>
          <div className='md:flex justify-center items-center text-center gap-4'>
            <div
              id='searchingBar'
              className='relative flex justify-between 
                  items-center text-center gap-3
                   bg-Neutral-700 py-2   md:px-5
                   md:w-[350px]
                   focus-within:ring-
                   focus-within:ring-white
                   focus-within:border-white
                    rounded-md'>
              <img src={search} alt='' className='ml-2 md:ml-0 h-4' />
              <input
                onSelect={() => setIsOpen(!isOpen)}
                onChange={handleChange}
                value={location}
                type='text'
                name=''
                placeholder='Search for a place...'
                id='searchItem'
                className='bg-transparent outline-none text-white 
                          placeholder:text-Neutral-300 w-full text-sm'
              />
              <div
                className={` ${isLoading ? "block" : "hidden"} absolute flex justify-start items-center text-center w-full h-10 bg-Neutral-700 left-0 mt-23 rounded-md z-3`}>
                <img src={loading} alt='' className='h-4 px-2' />{" "}
                <p className='text-xs text-white'>Searching in progress...</p>
              </div>
              <div
                id='historyItems'
                className={` ${isOpen ? "block" : "hidden"} absolute bg-Neutral-700 flex p-1 flex-col justify-start items-center text-left w-full min-h-10 bg-Neutral-700 left-0 mt-30 rounded-md z-3 cursor-pointer`}>
                <p className=' bg-Neutral-700 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
                  Kigali
                </p>
                <p className=' bg-Neutral-700 w-full py-2 px-2 mx-4 text-xs hover:border-1 hover:bg-Neutral-600 hover:border-Neutral-800 text-white rounded-md'>
                  Canada
                </p>
              </div>
            </div>

            <div
              className='bg-blue-500 rounded-md text-white cursor-pointer mt-3 md:mt-0'>
              <button
                className='text-sm py-2 px-3 cursor-pointer'
                onClick={handleSubmit}>
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      <div>
        {weatherData ?
          <Grid weatherData={weatherData} city={city} />
        : <div className='flex justify-center items-center text-center mt-15'>
            <p className='text-white text-md font-bold tracking-wide'>
              No search result found!
            </p>
          </div>
        }
      </div>
    </div>
  );
}

export default Body;