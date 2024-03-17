import { getTodayForecastWeather } from "../utils/dataUtils";
import { transformDateFormat } from "../utils/dateAndTimeUtils";

const WEATHER_API_KEY = "0bb3b67289906f2c3f35186ebbc3dd3b";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const date = new Date();
let dt_now = Math.floor(date.getTime() / 1000);
const currentDate = transformDateFormat();

export const getCityName = async (latitude, longitude) => {
    try {
        const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );

        const data = await response.json();
        return data.city;
    } catch (error) {
        console.error("Error fetching city name:", error);
        return null;
    }
};

export const fetchWeatherData = async (cityName) => {
    try {
        let [weatherPromise, forcastPromise] = await Promise.all([
            fetch(
                `${WEATHER_API_URL}/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`
            ),
            fetch(
                `${WEATHER_API_URL}/forecast?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`
            ),
        ]);

        const weatherResponse = await weatherPromise.json();
        const forcastResponse = await forcastPromise.json();
        const all_today_forecasts_list = getTodayForecastWeather(
            forcastResponse,
            currentDate,
            dt_now
        );

        return [all_today_forecasts_list, weatherResponse];
    } catch (error) {
        console.log(error);
    }
};