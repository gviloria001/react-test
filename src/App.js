import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WeatherScreen from './screens/WeatherScreen';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
