
// Context
import { useWeatherData } from "../context/WeatherInfoContext";
import { useLang } from "../context/LangContext";


// Components
import { Box, Button } from "@mui/material";
import WeatherInfo from "./WeatherInfo";



// Icon
import { Cloud } from "@mui/icons-material";


// Css
import "./WeatherBodyInfo.css"

export default function WeatherBody() {
    const { isLoad } = useWeatherData();
    const { weather } = useWeatherData();
    const { langSwitch } = useLang();

    return (
        <div className="weather-body">
            {
                isLoad ? <Box>
                    <WeatherInfo />
                    <span>{weather.weather[0].description}</span>
                    <div className="low-high">
                        <span>{langSwitch === "ar" ? "الصغرى :": "Minimum: "}{(weather.main.temp_min - 273.15).toFixed(0)}</span>
                        <span>{langSwitch === "ar" ? "الكبرى :": "Maximum: "}{(weather.main.temp_max - 273.15).toFixed(0)}</span>
                    </div>
                </Box> : <Button
                    loading
                    variant="text"
                    sx={{
                        width: "100%",
                        height: "100%",
                        "& .MuiCircularProgress-root": {
                            width: "40px !important",
                            height: "40px !important",
                            color: "#fff"
                        }
                    }}
                />
            }
            <Cloud />
        </div>
    );
}