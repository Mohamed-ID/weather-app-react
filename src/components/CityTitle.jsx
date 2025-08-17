


// Context
import { useWeatherData } from "../context/WeatherInfoContext";
import { useLang } from "../context/LangContext";

// Components
import { Button } from "@mui/material";


// Css
import "./CityTitle.css"

export default function CityTitle() {
    const { langSwitch } = useLang();
    const { weather, isLoad } = useWeatherData();
    const date = new Date().toLocaleDateString(langSwitch === "ar" ? "ar-EG" : "en", {year: "numeric", month: "long", day: "numeric"});

    console.log(weather);

    return (
        <div className="title">
            <h2>{isLoad ? weather.name : <Button loading variant="text" sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                padding: "20px 0",
                "& .MuiCircularProgress-root": {
                    width: "40px !important",
                    height: "40px !important",
                    color: "#fff",
                    alignSelf: "center",
                }
            }} />}</h2>
            <div>
                {date.replace(",", "")}
            </div>
        </div>
    );
}