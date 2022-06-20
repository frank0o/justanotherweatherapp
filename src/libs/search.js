import cities from '../data/cities.json'
const MIN_STR = 3
export function searchCities(newStr,oldStr){
    if (newStr.length<MIN_STR) return []
    //need to search both city names and country names
    //Hacky way to sort through an array of values
    newStr=newStr.toLowerCase()
    oldStr=oldStr.toLowerCase()
    return cities.reduce((a,i)=>{
      const name = i.name.toLowerCase()
      const country = i.country.toLowerCase()
      if (name.includes(newStr)||country.includes(newStr)) a.push(i)
      return a
    },[])

    //also do NOT want to have to redo search algorithm each time text is changed
    //hence oldStr
}
