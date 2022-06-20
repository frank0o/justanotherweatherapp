import {useEffect,useState} from 'react'
import {requestWeather} from './requestWeather'
import {requestImage} from './requestImage'
import {WeatherInfo} from './weatherInfo'
import './weather.css'
export function Weather({city}){
	const [weather,setWeather] = useState(null)
	const [weatherImage,setWeatherImage] = useState(null)
	const [weatherOpen,setWeatherOpen] = useState(false)

	useEffect(()=>{
		// const getWeather = async () => {
			if (city){
				//to prevent desyncs happening cuz you clicked on another city after you click on the initial city
				const updateWeather = async (city)=>{
					requestWeather(city).then(a=>{
						setWeather(a)
						console.log(a)
					})
				}
				setWeather(null)
				updateWeather(city)
			}

		// }
		// getWeather()

		if (weatherOpen){

		}else{

		}
	},[city])

	useEffect(()=>{

	},[weatherImage,weather])


	const handleCloseWeather = () =>{
		setWeather(null)
		setWeatherOpen(false)
	}


	return (
		<div className={weather ? "weatherWrapper" : "weatherWrapper weatherHidden"}>
			{(weather) && <WeatherInfo city={city} weather={weather} closeWeather={handleCloseWeather}/>}
		</div>
	)
}
