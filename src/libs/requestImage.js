import {IMAGE_KEY} from './keys'
import axios from 'axios'
// import {createClient} from 'pexels'
const URL = "https://api.pexels.com/v1/search?"
// var client = createClient(IMAGE_KEY)
export async function requestImage(city){
  try {
    const params = new URLSearchParams({query:`${city.name} ${city.country}`,size:'medium',per_page:1})
    const images = await axios.get(URL+params)
    // const images = await client.photos({query:`${city.name} ,${city.country}`,per_page:1,size:'large'})
    return images
  }catch(e){
    return e
  }
}
