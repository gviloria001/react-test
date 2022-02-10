import React, { useState } from 'react';
import './index.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import WeatherScreen from './screens/WeatherScreen';
import TestScreen from './screens/TestScreen';




function App() {
  const [coord, setCoord] = useState({});
  let navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCoord(values => ({
      ...values, [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/react-test/lat${coord.lat}/long${coord.long}`)
  }

  return (
    <div className='container' >
      <header className='row'>
        This is the header
      </header>

      <main>
        <div className='cardbody'>
          <div>
            hello
          </div>
          <Routes>
            <Route path="/react-test" element={<WeatherScreen />}></Route>
            <Route path="/react-test/lat:lat/long:long" element={<WeatherScreen />}></Route>
          </Routes>
          <form onSubmit={handleSubmit}>
            <label>
              Latitude
              <input type="text" name="lat" value={coord.lat} onChange={handleChange} />
            </label>
            <label>
              Longitude
              <input type="text" name="long" value={coord.long} onChange={handleChange} />
            </label>
            <input type="submit" />
          </form>
        </div>
      </main>

      <footer className='row center'>
        this is the footer
      </footer>
    </div >
  );
}

export default App;
