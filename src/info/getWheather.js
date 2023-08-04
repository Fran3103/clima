import keys from './keys'


const getWheather = async (event) => {

        event.preventDefault();
        const {city , county} = event.target.elements;
        const cityValue = city.value;
        const countryValue = county.value;
    
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${keys}`
    
        const resp = await fetch(apiUrl)
        const data = await resp.json() 
        console.log(data)

} 

export default getWheather()