import React, { useState } from "react"
import "./index.css"

const api = {
    key : "d1e69c830f113248fa5efa14d227f2f8",
    base : "https://api.openweathermap.org/data/2.5/"
}

function App(){

    const[query,setQuery] = useState("")
    const[weather,setWeather] = useState({})

    const search = evt =>{
        if(evt.key ==="Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res=>res.json())
            .then(result=>{
                setWeather(result);
                setQuery("");
            })
        }
    }
  
     
 return (
    <div className = {
        (typeof weather.main !="undefined")
        ? ((weather.main.temp>16)
            ? 'app warm'
            : 'app')
        : 'app' }>
        <main>
            <div className = "search-box">
                <input 
                    type= "text"
                    className = "search-bar"
                    placeholder = "Search...."
                    onChange = {e=>setQuery(e.target.value)}
                    value ={query}
                    onKeyPress={search}
                />
            </div>
            {(typeof weather.main !="undefined")?(
            <div> 
                <div className = "location-box">
                    <div className = "location">{weather.name},{weather.sys.country}</div>
                </div>
                <div className="weather-box">
                    <div className = "temp">{Math.round(weather.main.temp)}&deg;C
                    <div className="min_max">{Math.round(weather.main.temp_max)}&deg;C/Max &nbsp;&nbsp;&nbsp;
                    {Math.round(weather.main.temp_min)}&deg;C/Min</div>
                    <div className="wind-humid">Wind Speed-{weather.wind.speed}knots &nbsp;&nbsp;&nbsp;
                    <i className="fas fa-wind"></i>Humidity - {weather.main.humidity}%</div>
                    </div>
                    <div className="weather">{weather.weather[0].main}</div>
                </div>
            </div>    
            ):('')}
        </main>
    </div>
 )
}
export default App
