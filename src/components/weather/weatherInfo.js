import {useState} from 'react'
const importAll = (r)=>{
  const cache = {}
  r.keys().forEach((k)=>cache[k]=r(k))
  return cache
}
const images = importAll(require.context('./weathericons/',false,/\.png$/))
export function WeatherInfo({city,weather,closeWeather}){
  const curWeather = weather.current
  const weatherList = weather.forecast.map((i,j)=>{
    const date = new Date(i.datetime)
    const day = dayNames[date.getDay()]
    const imageString  = `./${curWeather.weather.icon}.png`
    return (
      <li key={j}>
        <p><b>{day}</b></p>
        <p>{`${i.app_min_temp} - ${i.app_max_temp}`}</p>
        <p>{i.weather.description}</p>
      </li>
    )
  })
  return (
    <>
        <div className="weatherCurrentWrapper">
          <h2>{city.name}, {city.country}</h2>
          <h4>It is currently {curWeather.temp} C</h4>
          <p>{curWeather.weather.description}</p>
        </div>
        <div className="weatherForecastWrapper">
          <h3 style={{textAlign:"center"}}>Week Forecast</h3>
          <ul className="weatherList">
            {weatherList}
          </ul>
        </div>
      </>
    )
}



const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
