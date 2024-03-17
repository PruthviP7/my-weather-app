import { Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchWeatherData, getCityName } from "../apis/api";
import { weatherIcon } from "../utils/IconsUtils";
import { getFormattedDate } from "../utils/dateAndTimeUtils";
import getRandomImagePath from "../utils/imageUtils";
import AdditionalInfo from "./AdditionalInfo";
import ImageWithIcon from "./ImageWithIcon";
import LandingFullScreenBottomsheet from "./LandingFullScreenBottomsheet";
import MyMenu from "./MyMenu";
import ScreenLoader from "./ScreenLoader";
import SearchBar from "./SearchBar";
import SvgImage from "./SvgImage";
import TemperatureChart from "./TemperatureChart";
import TodaysWeather from "./TodaysWeather";
import "./main.css";

const Main = () => {
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Mumbai");
  const [showModal, setShowModal] = useState(false);
  const [randomImagePath, setRandomImagePath] = useState("");

  useEffect(() => {
    const imagePath = getRandomImagePath();
    setRandomImagePath(imagePath);
  }, []);

  const fetchData = async (cityName) => {
    setLoading(true);
    try {
      const [all_today_forecasts_list, todayWeatherResponse] =
        await fetchWeatherData(cityName);

      if (
        all_today_forecasts_list.cod === "404" ||
        todayWeatherResponse.cod === "404"
      ) {
        throw new Error(
          all_today_forecasts_list.message || todayWeatherResponse.message
        );
      }
      setTodayForecast([...all_today_forecasts_list]);
      setTodayWeather({ city: cityName, ...todayWeatherResponse });
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      setShowModal(false);
      console.log("before toast");
      toast.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    const getLocationAndFetchData = async () => {
      setLoading(true);
      let cityName = "Mumbai"; // Default city

      if (navigator.geolocation) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          const { latitude, longitude } = position.coords;
          cityName = await getCityName(latitude, longitude);
        } catch (error) {
          console.error("Error getting geolocation:", error);
        }
      } else {
        console.error("Geolocation is not supported by this browser.");
      }

      fetchData(cityName);
    };

    getLocationAndFetchData();
  }, []);

  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    fetchData(city);
  }, [city]);

  const onCityChange = (value) => {
    setCity(value);
  };

  const todayWeatherCityInfo = todayWeather ? (
    <div className="city-info-wrapper">
      <div className="city-info">
        <Typography
          fontWeight="700"
          fontSize="25px"
          lineHeight="29px"
          letterSpacing="0.25px"
          color="#003339"
          fontFamily="Abhaya Libre, serif"
        >{`${todayWeather?.city}, ${todayWeather?.sys?.country}`}</Typography>
        <Typography
          fontWeight="700"
          fontSize="15px"
          lineHeight="17px"
          color="#96969A"
          fontFamily="Abhaya Libre, serif"
        >
          {getFormattedDate()}
        </Typography>
        <div className="ciw-info-img-wrapper">
          <SvgImage
            src={weatherIcon(`${todayWeather?.weather[0]?.icon}.png`) || ""}
            height="30px"
            width="30px"
            style={{ color: "#057BFF", background: "#f3f2f2" }}
          />
          <Typography
            paddingLeft="8px"
            fontWeight="700"
            fontSize="15px"
            lineHeight="17px"
            color="#057BFF"
            fontFamily="Abhaya Libre, serif"
          >
            {todayWeather?.weather[0]?.description}
          </Typography>
        </div>
      </div>
      <ImageWithIcon largeImageUrl={randomImagePath} />
    </div>
  ) : (
    <></>
  );

  if (loading) {
    return <ScreenLoader />;
  }

  return (
    <div className="main-container">
      <LandingFullScreenBottomsheet
        cityName={`${todayWeather?.city}, ${todayWeather?.sys?.country}`}
        isOpen={showModal}
        onClose={closeModal}
        randomImagePath={randomImagePath}
      />
      <div className="mc-header-wrapper">
        <MyMenu onCityChange={onCityChange} />
        <SearchBar onCityClick={onCityChange} />
      </div>
      {todayWeatherCityInfo}
      <TodaysWeather todayForecastList={todayForecast} />
      <Divider sx={{ margin: "16px" }} />
      <AdditionalInfo data={todayWeather} />
      <Divider sx={{ margin: "16px" }} />
      <TemperatureChart />
    </div>
  );
};

export default Main;
