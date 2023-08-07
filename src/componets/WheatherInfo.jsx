import React from 'react'
// import { BsThermometerSun} from "react-icons/bs";
import { WiHumidity} from "react-icons/wi";
import { TfiInfoAlt } from "react-icons/tfi";
// import { GoLocation } from "react-icons/go";

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
       <div className="descrip">
        {
            info.city && info.country &&
            <div >
            {/* <i><GoLocation/></i>  */}
            <h3>    {info.city}, {info.country}</h3>
            </div>

          }
          {
            info.temperature && info.temperature_max && info.temperature_min && 
            <div >
              {/* <i className='firtIcon'><BsThermometerSun/> </i>  */}
            <h2>  {info.temperature} °C <br /> <span>Max : {info.temperature_max} °C |  Min : {info.temperature_min} °C</span></h2>
            </div>
            
          }
       </div>
        <div className="descrip2">
          {
            info.humidity &&
            <div className="descrip3">
            <i className='secondIcon' ><WiHumidity/></i> 
          
            <p>   Humidity: {info.humidity} %</p>
            
            </div>

          }
          
          {
            info.description&& 
            <div className="descrip3">
            <i><TfiInfoAlt/></i> 
              <p>   Description :  {info.description}</p>
              </div>
          }
        </div>

        
      

      </div> : 
      <div >
        <p></p>
      </div>
    }
    </div>
  )
}

export default WheatherInfo