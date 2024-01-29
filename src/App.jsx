
import { useState } from "react";
import { useEffect } from "react";
import { WiHumidity } from "react-icons/wi";
import { FaGithub,  FaLinkedin } from "react-icons/fa";
import key from './keys'


function App() {
    
    const [id, setId] = useState(42833)
    const apiUrl = `https://api.tutiempo.net/json/?lan=ar&apid=${key}&lid=${id}`
    const [data , setData] = useState({})
    const [hora, setHora] = useState(true)
    const [dias, setDias] = useState(false)

    const [scrollLeft, setScrollLeft] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);


    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setStartX(e.pageX - scrollLeft);
    };

    
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollLeft);
    };
    
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - startX;
        setScrollLeft(x);
    };
    
    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - startX;
        setScrollLeft(x);
    };
    
    const handleMouseUp = () => {
        setIsDragging(false);
    };
    
    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    
    // funcion para obtenes el dia de la fecha
    const fechas = e => { 
        
        const fecha = new Date(e)  

        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
        //obtengo el indice del dia de la semana
        const indiceDiaSemana = fecha.getDay();
        // nombro el dia de la semnana
        const nombre = diasSemana[indiceDiaSemana]

        return nombre
    } 
    
    // seleciona la ciudad 
    const select = e =>{
        setId(e.target.value)
    }

    // funciones para seleccionar por dia u horas 
    const clickDias = () => {
        setHora(false)
        setDias(true)
    }

    const clickHoras = () => {
        setHora(true)
        setDias(false)
    }


    // obtengo los datos de la api dependiendo del id al seleccionar la ciudad. por defecto esta buenos aires
    const getData = async()=> {
        try {
            const resp = await fetch(apiUrl)
            if(!resp.ok){
                throw new Error(`HTTP error, Status: ${resp.status} `)
            }
            const datos = await resp.json()
            setData(datos)
           
        
        }catch(error){
            console.error("Error Fetching data: ", error)
            throw error
        }
        
    }
    

    useEffect(() => {
        
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    

  return (
    <>
      
      <div className="max-w-[1100px]  w-[90%] m-auto mt-5">

        {data && data.locality && ( 
            <>
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center sm:justify-between m-auto">
                <form action="#" className=" mt-5  ">
                    <select name="city" id="city" className="p-2 rounded-lg cursor-pointer  " aria-label="ciudades" onChange={select} >
                        <option value="42833">Buenos Aires</option>
                        <option value="31011">Catamarca</option>
                        <option value="43275">Chaco</option>
                        <option value="43271">Chubut</option>
                        <option value="42926">Córdoba</option>
                        <option value="42935">Corrientes</option>
                        <option value="42922">Entre Rios</option>
                        <option value="42994">Formosa</option>
                        <option value="31034">Jujuy</option>
                        <option value="43209">La Pampa</option>
                        <option value="43096">La Plata</option>
                        <option value="43101">La Rioja</option>
                        <option value="43174">Mendoza</option>
                        <option value="43238">Misiones</option>
                        <option value="43194">Neuquén</option>
                        <option value="43308">Río Negro</option>
                        <option value="43295">Salta</option>
                        <option value="43324">San Juan</option>
                        <option value="43328">San Luis</option>
                        <option value="31056">Santa Cruz</option>
                        <option value="43346">Santa Fe</option>
                        <option value="43357">Santiago Del Estero</option>
                        <option value="43407">Tierra Del Fuego</option>
                        <option value="31016">Tucumán</option>
                    </select>
                </form>
                <h1 className="text-base text-white">
                   {fechas(data.day1.date)},  {data.locality.name}, {data.locality.country}.
                </h1>
                </div>
                
                        
                <div className="w-full flex flex-col text-white m-auto ">
                                
                                <div className="flex flex-col justify-center m-auto mt-12  w-[90%]  ">
                                    
                                    <div className="flex flex-col gap-3 items-center justify-center ml-4">
                                        <div className="flex items-center gap-3 justify-around w-full md:max-w-[70%]">
                                            <img className=" w-20 " src={` https://v5i.tutiempo.net/wi/01/90/${data.hour_hour.hour1.icon}.png`} alt={`icono ${data.day1.text}`}  loading="eager"/>
                                            <p className="text-4xl "> {data.hour_hour.hour1.temperature} {data.information.temperature}</p>
                                        </div>
                                    
                                        <div className="flex items-center justify-around w-full text-xl md:max-w-[70%]">
                                            <p > {data.hour_hour.hour1.hour_data}</p>
                                            <p > {data.day1.text}</p>
                                        </div>
                                    </div>
                                
                                    <div className=" flex   md:gap-12 mt-5 justify-around text-center text-sm lg:text-xl w-full max-w-[90%] md:max-w-[70%] m-auto  text-white ">
                                        < div >
                                            <p>Viento</p>
                                            <div className="flex gap-3 justify-center items-center">
                                                <p className="text-xs md:text-lg">{data.day1.wind} {data.information.wind}</p>
                                            
                                            </div>

                                        </div>
                                        <div>
                                            <p>Humedad</p>
                                            <p className="text-xs md:text-lg">{data.day1.humidity} {data.information.humidity}</p>
                                        </div>
                                        <div>
                                            <p>Max</p>
                                            <p className="text-xs md:text-lg">{data.day1.temperature_max} {data.information.temperature}</p>
                                        </div>
                                        <div>
                                            <p>Min</p>
                                            <p className="text-xs md:text-lg">{data.day1.temperature_min} {data.information.temperature}</p>
                                        </div>
                                        

                                    </div>
                                </div>
                </div>

                <div className="mt-12 w-full m-auto pr-2 mb-12">
                                <div className="flex gap-2">
                                    <button onClick={clickHoras} className={hora ? "px-4 py-2 border rounded-lg bg-gray-100" : "px-4 py-2 border rounded-lg  text-gray-300"}>Hora</button>
                                    <button onClick={clickDias} className={dias ? "px-4 py-2 border rounded-lg bg-gray-100" : "px-4 py-2 border rounded-lg  text-gray-300"}>Dias</button>
                                </div>
                               

                                <div className={dias ? "flex flex-col lg:flex-row text-white justify-around items-center gap-4 w-full mt-12 text-xs md:text-base " : 'hidden'}>
                                    {/*convierto el objeto en un array para poder mapearlo desde un indice en expecifico*/}
                                    {Object.values(data).slice(7,13).map((dayData, index) => (
                                        <div key={index} className="m-auto w-full">
                                            <div className="border rounded-lg p-2 grid grid-cols-4 lg:flex lg:flex-col gap-4 items-center justify-around shadow-lg w-full h-full lg:w-36 lg:h-72 text-center">
                                                <h3>{fechas(dayData.date)}</h3>
                                                <img src={`https://v5i.tutiempo.net/wi/01/90/${dayData.icon}.png`} className="w-12 md:w-full md:max-w-[90px]" alt="icon" />
                                                <h4 className="mr-8 lg:mr-0">{dayData.text}</h4>
                                                <div className="flex flex-col lg:flex-row gap-2 items-center">
                                                    <p>Min {dayData.temperature_min}°</p>
                                                    <p className="mb-1 hidden lg:block">|</p>
                                                    <p>Max {dayData.temperature_max}°</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            <div className={hora ? "w-full max-w-[1100px] border rounded-xl px-2 mt-12 h-full overflow-hidden relative" : 'hidden'}
                                style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", cursor: isDragging ? "grabbing" : "grab" }}
                                onMouseDown={handleMouseDown}
                                onTouchStart={handleTouchStart}
                                onMouseMove={handleMouseMove}
                                onTouchMove={handleTouchMove}
                                onMouseUp={handleMouseUp}
                                onTouchEnd={handleTouchEnd}
                            
                            >
                               
                                <div className="w-full flex gap-3 items-center relative z-0">

                                    {/*convierto el objeto a array para poder mapearlo*/}
                                    {Object.values(data.hour_hour).map((hourData, index) => (
                                        <div key={index} className="flex flex-col gap-4 items-center justify-around text-xs md:text-base lg:text-lg h-72 text-center text-white">
                                            <h3 className="text-xs md:text-base">{hourData.hour_data}</h3>
                                            <img className="w-6 sm:w-10 md:w-12" src={`https://v5i.tutiempo.net/wi/01/90/${hourData.icon}.png`} alt="icon" />
                                            <div>
                                                <p className="text-base">{hourData.temperature}°</p>
                                                <p className="flex items-center mt-4 mr-3"><WiHumidity /> {hourData.humidity}%</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                </div>
            </>
        )}
            

            <footer className="m-auto  text-center mb-3">
                <div className="flex  items-center justify-center gap-5 mb-6">
                    <h4> Diseño Franco Aguirre   </h4>
                    <a href="https://github.com/Fran3103/clima.git" target="Blank_"><FaGithub className="cursor-pointer hover:text-white duration-200 ease-in-out transition-all"/></a> 
                    <a href="https://www.linkedin.com/in/franco-aguirre-24855012a" target="Blank_"><FaLinkedin className="cursor-pointer hover:text-white duration-200 ease-in-out transition-all" /></a>
                </div>
                <h3 className="text-xs">Datos obtenidos en {data.copyright}</h3>
            </footer>
      </div>
    </>
  )
}

export default App
