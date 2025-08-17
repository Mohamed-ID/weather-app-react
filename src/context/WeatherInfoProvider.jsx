import { useState, useEffect } from "react";

// Context
import { WeatherData } from "./WeatherInfoContext";
import { useLang } from "../context/LangContext";


// Fetch weather info
import weatherInfo from "../utils/fetchWeatherData";
    



export default function WatherDataProvider({children}) {
    const { langSwitch } = useLang();
    const [isLoad, setIsLoad] = useState(false);
    const [weather, setWeather] = useState(undefined);

    useEffect( () => {
        const wheatherInfoData = async () => {

            try {
                const data = await weatherInfo();
                langSwitch === "ar" ? setWeather(data[0]) : setWeather(data[1]);
                setIsLoad(true);
            }
            catch (err) {
                console.log(err);
                
            }

        } 

        wheatherInfoData();
    }, [langSwitch]);
    

    return(
        <WeatherData.Provider value={{weather, isLoad, setIsLoad}}>
            {children}
        </WeatherData.Provider>
    );
}