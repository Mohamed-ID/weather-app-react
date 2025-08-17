// React hooks
import { createContext, useContext } from "react";


export const WeatherData = createContext({});


export const useWeatherData = () => {
    return useContext(WeatherData);
}
