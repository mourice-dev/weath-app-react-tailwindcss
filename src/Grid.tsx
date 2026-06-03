/** @format */

import React from "react";
import sun from "../src/assets/images/icon-sunny.webp";
import rain from "../src/assets/images/icon-rain.webp";
import overcast from "../src/assets/images/icon-overcast.webp";
import fog from "../src/assets/images/icon-fog.webp";
import snow from "../src/assets/images/icon-snow.webp";
import storm from "../src/assets/images/icon-storm.webp";
import drizzle from "../src/assets/images/icon-drizzle.webp";
import partlyCloudy from "../src/assets/images/icon-partly-cloudy.webp";
import Today from "../src/assets/images/bg-today-large.svg";
import dropdown from "../src/assets/images/icon-dropdown.svg";
import { useState } from "react";

const getWeatherIcon = (code: number) => {
  if (code === 0) return sun;
  if (code >= 1 && code <= 3) return partlyCloudy;
  if (code === 45 || code === 48) return fog;
  if (code >= 51 && code <= 55) return drizzle;
  if (code >= 61 && code <= 65) return rain;
  if (code >= 71 && code <= 77) return snow;
  if (code >= 80 && code <= 82) return rain;
  if (code >= 95 && code <= 99) return storm;
  return overcast;
};
interface GridProps {
  weatherData?: any;
  city?: any;
}

function Grid({ weatherData, city }: GridProps) {
  const [isOpen, setIsOpen] = useState(false);
  const weatherTime =
    weatherData?.current?.time ?
      new Date(weatherData.current.time)
    : new Date();

  const formDate = weatherTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <div className='md:grid grid-cols-3 gap-6 mt-7'>
        <div className='flex-col col-span-2'>
          <div className=' relative flex justify-between items-center overflow-hidden rounded-xl'>
            <div className='absolute flex flex-col md:flex-row md:justify-between w-full items-center text-center text-white px-5'>
              <div className='flex flex-col justify-center items-center  text-left'>
                <p className='text-xl font-semibold'>
                  {city?.name}, {city?.country}
                </p>
                <p className='text-xs block'>{formDate}</p>
              </div>
              <div className='flex justify-center items-center text-center '>
                <img
                  src={getWeatherIcon(weatherData?.current?.weather_code)}
                  alt=''
                  className='h-20'
                />
                <p className='text-7xl font-semibold'>
                  {Math.round(weatherData?.current?.temperature_2m)}&deg;
                </p>
              </div>
            </div>
            <img src={Today} alt='' className='w-full object-cover h-50' />
          </div>

          <div className=' grid grid-cols-2 gap-5 md:flex justify-between items-center mt-5 text-white '>
            <div className='bg-Neutral-800 border-1 text-left p-2 border-Neutral-600 rounded-xl lg:w-40'>
              <p className='text-xs'>Feels Like</p>
              <p className='text-2xl mt-3'>
                {Math.round(weatherData?.current?.apparent_temperature)}&deg;
              </p>
            </div>
            <div className='bg-Neutral-800 border-1 text-left p-2 border-Neutral-600 rounded-xl lg:w-40'>
              <p className='text-xs'>Humidity</p>
              <p className='text-2xl mt-3'>
                {weatherData?.current?.relative_humidity_2m}%
              </p>
            </div>
            <div className='bg-Neutral-800 border-1 text-left p-2 border-Neutral-600 rounded-xl lg:w-40'>
              <p className='text-xs'>Wind</p>
              <p className='text-2xl mt-3'>
                {weatherData?.current?.wind_speed_10m} Km/h
              </p>
            </div>
            <div className='bg-Neutral-800 border-1 text-left p-2 border-Neutral-600 rounded-xl lg:w-40'>
              <p className='text-xs'>Precipitation</p>
              <p className='text-2xl mt-3'>
                {weatherData?.current?.precipitation} mm
              </p>
            </div>
          </div>
          <div className='mt-8'>
            <div className='text-left text-white text-sm mb-4'>
              <p> Daily forecast</p>
            </div>
            <div className='grid grid-cols-3 gap-4 md:grid-cols-7 justify-between'>
              {weatherData?.daily?.time
                ?.slice(0, 7)
                .map((timeStr: string, index: number) => {
                  // Format the date to show "Tue", "Wed", etc.
                  const dayName = new Date(timeStr).toLocaleDateString(
                    "en-US",
                    { weekday: "short" },
                  );
                  const weatherCode = weatherData.daily.weather_code[index];
                  const tempMax = Math.round(
                    weatherData.daily.temperature_2m_max[index],
                  );
                  const tempMin = Math.round(
                    weatherData.daily.temperature_2m_min[index],
                  );

                  return (
                    <div
                      key={timeStr}
                      className='bg-Neutral-800 border-1 items-center text-center text-white border-Neutral-600 rounded-xl'>
                      <p className='text-xs p-2'>{dayName}</p>
                      <div className='flex justify-center items-center'>
                        <img
                          src={getWeatherIcon(weatherCode)}
                          alt=''
                          className='h-10'
                        />
                      </div>
                      <div className='flex justify-between items-center text-center gap-6 px-2 py-3 '>
                        <p className='text-xs'>{tempMax}&deg;</p>
                        <p className='text-xs text-gray-400'>{tempMin}&deg;</p>
                      </div>
                    </div>
                  );
                })}
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
                className={` ${isOpen ? "block" : "hidden"} absolute bg-Neutral-800 flex p-1 flex-col justify-start items-center text-left w-40 min-h-10 border-1 border-Neutral-600 right-0 mr-1 top-0 -translate-y-20 mt-30 rounded-md z-3 cursor-pointer`}>
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
            {weatherData?.hourly?.time
              ?.slice(0, 24)
              .map((timeStr: string, index: number) => {
                const hourTime = new Date(timeStr).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  hour12: true,
                });
                const temp = Math.round(
                  weatherData.hourly.temperature_2m[index],
                );
                const weatherCode = weatherData.hourly.weather_code[index];

                return (
                  <div
                    key={timeStr}
                    className='flex justify-between items-center mx-4 mt-2 px-3 text-center text-sm bg-Neutral-700 border-1 border-Neutral-600 h-10 rounded-md '>
                    <div className='flex justify-center items-center text-center gap-1'>
                      <img
                        src={getWeatherIcon(weatherCode)}
                        alt=''
                        className='h-7'
                      />
                      <p>{hourTime}</p>
                    </div>
                    <p className='text-sm'>{temp}&deg;</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
