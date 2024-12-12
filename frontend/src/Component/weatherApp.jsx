import React, { useState, useEffect } from "react";
import "./WeatherApp.css"; // Add your CSS styles here
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("Moratuwa");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [speed, setSpeed] = useState(""); 
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");

  useEffect(() => {
    handleSearch();
  }, []);  // Runs once after the initial render

  const handleSearch = () => {
    axios
      .get("http://localhost:3000/weather", {
        params: { address: city }
      })
      .then((response) => {
        const data = response.data.error;
        setTemperature((data.main.temp - 273).toFixed(2));
        setIcon(data.weather[0].icon);
        setDescription(data.weather[0].description);
        setMinTemp((data.main.temp_min - 273).toFixed(2));
        setMaxTemp((data.main.temp_max - 273).toFixed(2));
        setSpeed(data.wind.speed);
        setHumidity(data.main.humidity);
        setPressure(data.main.pressure);
      })
      .catch((error) => {
        console.error("There was an error fetching the weather data!", error);
      });
  };

  return (
    <div className="weather-app-container">
      <div className="weather-card">
        <h1>Find Weather</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="weather-info">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather Icon"
            className="weather-icon"
          />
          <h2>{temperature}°C</h2>
          <div className="min_max">
            <p>Min Temp: {minTemp}°C</p>
            <p>Max Temp: {maxTemp}°C</p>
          </div>
          <p className="details">"{description}"</p>
          <div className="wind">
            <p>Wind Speed: {speed} m/s</p>
            <p>Humidity: {humidity}%</p>
            <p>Pressure: {pressure} hPa</p>
          </div>
          <p>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
