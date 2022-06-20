import logo from './logo.svg';
import './App.css';
import {Search} from './components/search/search.js'
import {Weather} from './components/weather/weather.js'
import {useRef,useEffect,useState} from 'react'
import data from './data/cities.json'
import {requestImage} from './libs/requestImage'
// import {createClient} from 'pexels'
// const c = createClient("563492ad6f917000010000014caa0fd371c2498195a6b03a4bb4a320")
// c.photos.search({per_page:1}).then(p=>console.log(p))

function App() {

	const [city,setCity] = useState(null)
	const [backgroundStyle,setBackgroundStyle] = useState({backgroundColor:`${randomBG()}`})
	const handleSetCity = (newCity)=>{
		setCity(newCity)
		setBackgroundStyle(null)
		requestImage(newCity).then(a=>{
			if (a.code=='ERR_BAD_REQUEST'){
				setBackgroundStyle({backgroundColor:`${randomBG()}`})
				console.log('here')
				return
			}
			console.log(a)
			const photos = a.data.photos[0].src
			tinyImage.current.src=photos.tiny
			fullImage.current.src=photos.landscape
		})
	}

	//this is how i clean up the JSON file lol
	// const newlist = []
	// data.forEach((item) => {
	// 		if (item.country!='China') newlist.push(item)
	// });
	// console.log(newlist)


	const tinyImage = useRef(new Image())
	tinyImage.current.onload=()=>{
		console.log('loaded tiny')
		setBackgroundStyle({backgroundImage:`url(${tinyImage.current.src})`,filter:"blur(20px)"})//,filter:"blur(0.5)"})
	}
	const fullImage = useRef(new Image())
	fullImage.current.onload=()=>{
		console.log('loaded full')
		setBackgroundStyle({backgroundImage:`url(${fullImage.current.src})`})
	}
	const handleUpdateBackground = ({})=>{

	}

  return (
    <div className="App">
      <header className="App-header">
				<h1>Just Another Weather App</h1>
      </header>
			<div className="appWrapper">


				<div className="appBackground" style={backgroundStyle}/>
				<Search selectCity={handleSetCity} getBackground={handleUpdateBackground}/>
				<Weather city={city} />
			</div>
			<div className="aboutWrapper">
				<p>By Francis Mikula-Quilty</p>
				<p>Using: <a href="weatherbit.io">weatherbit.io</a> and <a href="pexels.com">pexels.com</a></p>
			</div>
    </div>
  );
}

export default App;

const randomBG = ()=>{
	const rand = ()=>Number(Math.floor(Math.random()*100+155)).toString(16)
	const bg = `#${rand()}${rand()}${rand()}`
	console.log(bg)
	return bg
}
