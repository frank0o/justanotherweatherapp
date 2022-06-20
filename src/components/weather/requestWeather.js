import {WEATHER_KEY} from '../../libs/keys'
import axios from 'axios'
const CUR_URL = "https://api.weatherbit.io/v2.0/current?"
const FOR_URL = "https://api.weatherbit.io/v2.0/forecast/daily?"
//This uses the weatherbit.io API but you can substitute your own (i guess lol)
export async function requestWeather(city,forecastDays=7){
  const params = new URLSearchParams({city:city.name,country:city.country,key:WEATHER_KEY})
  // const data = await fetch(string)


  	//for some reason China doesn't return results? should probably clear that up

  const weather = {city:city}
  {
    let {data} = await axios(CUR_URL+params)
    weather.current = data.data[0]
  }
  let {data} = await axios(FOR_URL+params)
  weather.forecast = data.data.slice(1,forecastDays+1)
  return weather
  // return {cur:cur_weather,for:for_weather}
}
