import React from 'react'
// import keys from '../info/keys'
const WheatherForm = ({getWheather  }) => {

//   getWheather = async (event) => {

//         event.preventDefault();
//         const {city , county} = event.target.elements;
//         const cityValue = city.value;
//         const countryValue = county.value;
    
//         const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${keys}`
    
//         const resp = await fetch(apiUrl)
//         const data = await resp.json() 
//         console.log(data)

// }
  return (
    <div className='card card-body ' >
        <form onSubmit={getWheather}>
            <div className="form-group p-3">
                <input type="text" name='citys' placeholder='Ingrese Ciudad' className='form-control' autoFocus />
            </div>
            <div className="form-group p-3">
                <input type="text" name='countrys' placeholder='Ingrese Pais' className='form-control' autoFocus />
            </div>
            <button className='btn btn-success'>
                Obtener Clima
            </button>
        </form>
    </div>
  )
}

export default WheatherForm