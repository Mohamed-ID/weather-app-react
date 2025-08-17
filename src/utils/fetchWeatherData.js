// Axios
import axios from "axios";

export default async function weatherInfo() {
    const key = "1f41507f95f19246dc0b5012fc8bd459";
    const city = "Marrakesh ,MA";
    const limit = 1;

    try {

        const resGeo = await (await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${key}`)).data;


        const lat = resGeo[0].lat;
        const lon = resGeo[0].lon;


        const resWeather = await Promise.all(
            [
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=ar`),
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=en`)
            ]);
        
        const resWeatherData = resWeather.map(ele => ele.data);
        
        
        return resWeatherData;

    } catch (err) {

        console.log(err);

    }
}
