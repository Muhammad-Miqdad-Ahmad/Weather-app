import { useEffect, useState } from "react";
import PlaceTimeDate from "./PlaceTimeDate";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../States/Action Creators/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faDroplet,
  faSun,
  faSunPlantWilt,
  faTemperatureArrowDown,
  faTemperatureArrowUp,
  faUmbrella,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

const API_KEY = process.env.REACT_APP_WEATHER_API;

export default function Back() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [city] = useState("Lahore");

  useEffect(() => {
    dispatch(getWeather([API_KEY, city]));
  }, [city, dispatch]);

  return (
    <div>
      <PlaceTimeDate state={state} />
      <div className="mt-6 mb-6 border-t-[1px] border-t-[#1a6b55] border-b-[1px] border-b-[#0e3a2e]">
        <ul className="grid grid-rows-9 grid-cols-1 gap-4 pt-4 pb-4">
          <li className="grid grid-rows-1 grid-cols-2 text-white">
            <p className="pl-2 font-dosis font-bold text-3xl w-80">
              <FontAwesomeIcon icon={faTemperatureArrowUp} /> &nbsp;Max
              Temperature
            </p>
            <p className="justify-self-end pr-3 font-dosis font-extrabold text-3xl">
              {state?.weather?.data?.forecast?.forecastday[0]?.day?.maxtemp_c}
              &deg;
            </p>
          </li>
          <li className="grid grid-rows-1 grid-cols-2 text-white">
            <p className="pl-2 font-dosis font-bold text-3xl w-80">
              <FontAwesomeIcon icon={faTemperatureArrowDown} />
              &nbsp; Min Temperature
            </p>
            <p className="justify-self-end pr-3 font-dosis font-extrabold text-3xl">
              {state?.weather?.data?.forecast?.forecastday[0]?.day?.mintemp_c}
              &deg;
            </p>
          </li>
          <li className="grid grid-rows-1 grid-cols-2 text-white">
            <p className="pl-2 font-dosis font-bold text-3xl w-80">
              <FontAwesomeIcon icon={faWind} /> &nbsp;Wind Speed
            </p>
            <p className="justify-self-end pr-3 font-dosis font-extrabold text-3xl">
              {state?.weather?.data?.current?.wind_kph} kph
            </p>
          </li>
          <li className="grid grid-rows-1 grid-cols-2 text-white">
            <p className="pl-2 font-dosis font-bold text-3xl w-80">
              <FontAwesomeIcon icon={faCompass} /> &nbsp;Wind direction
            </p>
            <p className="justify-self-end pr-3 font-dosis font-extrabold text-3xl">
              {state?.weather?.data?.current?.wind_dir}
            </p>
          </li>
          <li className="grid grid-rows-1 grid-cols-2 text-white">
            <p className="pl-2 font-dosis font-bold text-3xl w-80">
              <FontAwesomeIcon icon={faSunPlantWilt} /> Uv index
            </p>
            <p className="justify-self-end pr-3 font-dosis font-extrabold text-3xl">
              {state?.weather?.data?.forecast?.forecastday[0]?.day?.uv}
            </p>
          </li>
          <li className="grid grid-rows-1 grid-cols-2 text-white">
            <p className="pl-2 font-dosis font-bold text-3xl w-80">
              <FontAwesomeIcon icon={faUmbrella} /> Chance of rain
            </p>
            <p className="justify-self-end pr-3 font-dosis font-extrabold text-3xl">
              {
                state?.weather?.data?.forecast?.forecastday[0]?.day
                  ?.daily_chance_of_rain
              }{" "}
              %
            </p>
          </li>
          <li className="grid grid-rows-1 grid-cols-2 text-white">
            <p className="pl-3 font-dosis font-bold text-3xl w-80">
              <FontAwesomeIcon icon={faDroplet} /> &nbsp;Humidity
            </p>
            <p className="justify-self-end pr-3 font-dosis font-extrabold text-3xl">
              {state?.weather?.data?.current?.humidity}
            </p>
          </li>
          <li className="grid grid-rows-1 grid-cols-2 text-white">
            <p className="pl-2 font-dosis font-bold text-3xl w-80">
              <FontAwesomeIcon icon={faSun} /> &nbsp;Sunrise
            </p>
            <p className="justify-self-end pr-3 font-dosis font-extrabold text-3xl">
              {state?.weather?.data?.forecast?.forecastday[0]?.astro?.sunrise}
            </p>
          </li>
          <li className="grid grid-rows-1 grid-cols-2 text-white">
            <p className="pl-2 font-dosis font-bold text-3xl w-80">
              <FontAwesomeIcon icon={faSun} /> &nbsp;Sunset
            </p>
            <p className="justify-self-end pr-3 font-dosis font-extrabold text-3xl">
              {state?.weather?.data?.forecast?.forecastday[0]?.astro?.sunset}
            </p>
          </li>
        </ul>
      </div>
      <SearchBar />
    </div>
  );
}
