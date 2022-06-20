import './search.css'
import {useState,useEffect} from 'react'
import {searchCities} from '../../libs/search.js'
export function Search({selectCity}){
  const [text,setText] = useState('')
  const [cities,setCities] = useState([])

  const resetCities = ()=>{
    setCities([])
    setText('')
  }

  const updateCities = (e)=>{
    const newText = e.target.value
    setCities(searchCities(newText.trim(),text))
    setText(newText)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (cities[0]) {
      selectCity(cities[0])
      setCities([])
    }
  }

  const handleSelectCity = (i)=>{
    selectCity(i)
    resetCities([])
  }

  const cityList = cities.map((i)=>{
    const cityStr = `${i.name}, ${i.country}`
    return (
      <p key={cityStr} onClick={()=>handleSelectCity(i)} className="cityListItem">{cityStr}</p>
    )
  })

  return (
    <>
      <div className="searchWrapper">
        <div className="searchInputWrapper">
          <form onSubmit={(e)=>handleSubmit(e)} className="searchForm">
            <div className="textInputWrapper">
              <input type="text" className="searchInput" autoFocus default="" onChange={(e)=>updateCities(e)} value={text}/>
              <div className="searchResultsWrapper " style={{visibility: cities==false ? "hidden" :'visible' } }>
              {cityList}
              </div>
            </div>
            <button className="searchButton">Search</button>
          </form>

        </div>

      </div>
    </>
  )
}

const cityStr = (city)=>`${city.name},${city.country}`
