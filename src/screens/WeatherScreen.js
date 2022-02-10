import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router";
import api from '../api.json';

function WeatherScreen() {
    const { lat, long } = useParams()
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=a5dfba1fdabe4fab8d45adfbc3238faa`;
    //const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33&lon=-118&units=imperial&appid=a5dfba1fdabe4fab8d45adfbc3238faa'

    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response)
                setProduct(response.data)
            }).catch(e => {
                console.log(e);
            })
    }, [url])
    if (product) {
        return (
            <ul className="Weather">
                <li>{product.name}</li>
                <li>{product.main.temp}</li>
            </ul>
        )
    }
    return (
        <div>
            Loading...
        </div>
    )

}

export default WeatherScreen