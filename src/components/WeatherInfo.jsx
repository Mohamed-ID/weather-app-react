
// Context
import { useWeatherData } from "../context/WeatherInfoContext";


// Components
import { Avatar } from "@mui/material";


// Css
import "./WeatherInfo.css"


export default function WeatherInfo() {
    const { weather } = useWeatherData();
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;


    return(
        <div className="temperature">
            <h1>{(weather.main.temp - 273.15).toFixed(0)}</h1>
            <Avatar className="weather-icon" src={iconUrl} />
        </div>
    );
}