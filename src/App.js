import React, { useState } from 'react';
import './index.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import WeatherScreen from './screens/WeatherScreen';
import HistoryScreen from './screens/HistoryScreen';
import axios from 'axios';
import TestScreen from './screens/TestScreen';




function App() {
  const [coord, setCoord] = useState({
    data: {
      "coord": {
        "lon": 30,
        "lat": 30
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 292.09,
        "feels_like": 290.59,
        "temp_min": 292.09,
        "temp_max": 292.09,
        "pressure": 1016,
        "humidity": 21,
        "sea_level": 1016,
        "grnd_level": 1001
      },
      "visibility": 10000,
      "wind": {
        "speed": 4.19,
        "deg": 267,
        "gust": 5.81
      },
      "clouds": {
        "all": 1
      },
      "dt": 1644331835,
      "sys": {
        "country": "EG",
        "sunrise": 1644295553,
        "sunset": 1644334953
      },
      "timezone": 7200,
      "id": 353223,
      "name": "Madīnat as Sādāt",
      "cod": 200
    },
    lat: 33,
    long: -118,
    submitted: false,
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.long}&units=imperial&appid=a5dfba1fdabe4fab8d45adfbc3238faa`;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTimeout(() => {
      setCoord(values => ({
        ...values, [name]: value
      }))
    }, 100)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(url)
      .then(response => {
        coord.data = response.data;
        setCoord(values => ({
          ...values, submitted: true
        }))
      }).catch(e => {
        console.log(e);
      })
  }

  return (
    <div className='container' >
      <header className='row'>
        This is the header
      </header>

      <main>
        <div className='cardbody'>
          <TestScreen params={coord.data} />
        </div>

        <div className='cardbody'>
          <WeatherScreen params={coord.data} />
          <form onSubmit={handleSubmit}>
            <label>
              Longitude
              <input type="text" name="long" value={coord.long} onChange={handleChange} />
            </label>
            <label>
              Latitude
              <input type="text" name="lat" value={coord.lat} onChange={handleChange} />
            </label>
            <input type="submit" />
          </form>
        </div>

        <div className='cardbody'>

        </div>
      </main>

      <footer className='row center'>
        this is the footer
      </footer>
    </div >
  );
}

export default App;
