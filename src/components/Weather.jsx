// Components
import CityTitle from "./CityTitle";
import WeatherBody from "./WeatherBodyInfo";


// Matirial UI
import { Container, Button } from "@mui/material";


// Context
import WatherDataProvider from "../context/WeatherInfoProvider";
import { useLang } from "../context/LangContext";


// Css
import "./Weather.css"


export default function WeatherApp() {
    const { langSwitch, setLangSwitch } = useLang();

    function handleChangeLang() {
        langSwitch === "ar" ? setLangSwitch("en") : setLangSwitch("ar");
    }

    return (
        <WatherDataProvider>
            <Container maxWidth="sm" className="parent-container">
                <Container maxWidth="xs" className={`weather-box ${langSwitch}`}>
                    <CityTitle />
                    <hr />
                    <WeatherBody />
                </Container>
                <Button 
                variant="outlined"
                color=""
                onClick={handleChangeLang}
                >
                    {langSwitch === "ar" ? "إنجليزي" : "arabic"}
                </Button>
            </Container>

        </WatherDataProvider>
    );
}