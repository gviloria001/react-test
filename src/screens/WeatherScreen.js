import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";

function WeatherScreen() {
    const { lat } = useParams();
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=20&lon=100&appid=a5dfba1fdabe4fab8d45adfbc3238faa`;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })
    }, [url])
    if (product) {
        return (
            <div>
                {product.name}
                {product.main.temp}
            </div>
        )
    }
    return (
        <div>

        </div>
    )

}

export default WeatherScreen