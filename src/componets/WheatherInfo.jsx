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
        <p>Temperature : {info.temperature} °C</p>
        <p>Temperature max : {info.temperature_max} °C</p>
        <p>Temperature min : {info.temperature_min} °C</p>
        <p>Humidity: {info.humidity} %</p>
        <p>Description : {info.description}</p>
        <p>City: {info.city}</p>
        <p>County: {info.country}</p>

      </div> : 
      <div >
        <p></p>
      </div>
    }
    </div>
  )
}

export default WheatherInfo