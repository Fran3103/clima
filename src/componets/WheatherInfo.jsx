import React from 'react'
import { BsThermometerSun} from "react-icons/bs";
import { WiHumidity} from "react-icons/wi";
import { TfiInfoAlt } from "react-icons/tfi";
import { GoLocation } from "react-icons/go";

const WheatherInfo = ({info}) => {
  
  return (
    <div>
        { info.error &&
          <div className='alert alert-danger'>
          <p> {info.error} </p>
          </div>
        }
        
       

    {
      info.city ? 
      <div className='card info'>
        {
          info.temperature && info.temperature_max && info.temperature_min && 
          <div className="descrip">
            <i className='firtIcon'><BsThermometerSun/> </i> 
          <p> Temperature : {info.temperature} °C <br /> <span>Max : {info.temperature_max} °C |  Min : {info.temperature_min} °C</span></p>
          </div>
          
        }
        {
          info.humidity &&
          <div className="descrip">
           <i className='secondIcon' ><WiHumidity/></i> 
        
          <p>   Humidity: {info.humidity} %</p>
          
          </div>

        }
        
        {
          info.description&& 
          <div className="descrip">
           <i><TfiInfoAlt/></i> 
            <p>   Description : {info.description}</p>
            </div>
        }

        {
          info.city && info.country &&
          <div className="descrip">
           <i><GoLocation/></i> 
          <p>    City: {info.city}, County: {info.country}</p>
          </div>

        }
        
      

      </div> : 
      <div >
        <p></p>
      </div>
    }
    </div>
  )
}

export default WheatherInfo