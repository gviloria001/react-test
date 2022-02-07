import React, { useEffect, useState } from "react";
import axios from 'axios';

function WeatherScreen() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a5dfba1fdabe4fab8d45adfbc3238faa';
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
                hello
            </div>
        )
    }
    return (
        <div>

        </div>
    )

}

export default WeatherScreen