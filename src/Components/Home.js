import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getWeather } from "../States/Action Creators/actions";
import ApiModule from "./ApiModule";
import { useLocation } from "react-router-dom";

const API_KEY = process.env.REACT_APP_WEATHER_API;

export default function Home() {
  const dispatch = useDispatch();
  const myProp = useLocation().state;
  const [city, setcity] = useState("Lahore");

  useEffect(() => {
    if (myProp?.city !== "" && myProp?.city) {
      setcity(myProp.city);
    } else setcity("lahore");
    console.log(city);
    console.log(myProp?.city);
  }, [myProp, city]);

  useEffect(() => {
    dispatch(getWeather([API_KEY, city]));
  }, [city, dispatch]);

  return (
    <div>
      <ApiModule />
    </div>
  );
}
