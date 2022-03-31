import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";

function WeatherScreen({ params }) {
    return (
        <ul className="Weather">
            <li>{params.name}</li>
            <li>Longitude: {params.coord.lon}</li>
            <li>Latitude: {params.coord.lat}</li>
            <li>Temp: {params.main.temp}F</li>
            <li>But it feels like {params.main.feels_like}F</li>
        </ul>
    )
}

export default WeatherScreen