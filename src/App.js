
import { useEffect, useState } from 'react';
import './App.css';
import WheatherForm from './componets/WheatherForm';
import WheatherInfo from './componets/WheatherInfo';
import keys from './info/keys'
function App() {

  const [info , setInfo] = useState(
    {
      temperature:'',
      temperature_max:'',
      temperature_min:'',
      description : '',
      city: '',
      county: '',
      error :null,
      wind:'',

      humidity: ''
    } 
  )

  const [city, setCity] = useState("")
  const[country, setCountry]= useState("")


    const getWheather = (e) =>{
        e.preventDefault()
        const citys = e.target.citys.value
        const countrys = e.target.countrys.value
        setCity(citys)
        setCountry(countrys)
    }


      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${keys}&units=metric`
      
      useEffect(() => {
       if (city && country ){ 
          
          fetch(apiUrl)
          .then(response =>  response.json() )
          .then(resp => {
            const {main, name ,wind,sys , weather } = resp

            const info = {
            
              city: name,
              temperature: main.temp,
              temperature_max: main.temp_max,
              temperature_min: main.temp_min,
              wind: wind.speed,
              country: sys.country,
              description: weather[0].description,
              humidity: main.humidity

              }
          setInfo(info)
        })
          } else {
            setInfo({error: 'ingrese Ciudad y Pais'})
        }
       
      
      }, [apiUrl, city , country])
      
      



  

  return (    
    <div className="App container p-5">
        <div className='row'>
          <div className='col-md-5 mx-auto'>
            <WheatherForm  getWheather={getWheather}  />
            <WheatherInfo info={info}/>
          </div>
        </div>
    </div>
  );
}

export default App;
