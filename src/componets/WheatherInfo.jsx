import React from 'react'

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
      <div className='card'>
        {
          info.temperature && info.temperature_max && info.temperature_min && 
          <p>Temperature : {info.temperature} °C <br /> Max : {info.temperature_max} °C |  Min : {info.temperature_min} °C</p>
          
        }
        {
          info.humidity &&
          <p>Humidity: {info.humidity} %</p>

        }
        
        {
          info.description&& <p>Description : {info.description}</p>
        }

        {
          info.city && info.country &&
          <p>City: {info.city}, County: {info.country}</p>

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