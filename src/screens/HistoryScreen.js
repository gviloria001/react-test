import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";

export default function HistoryScreen({ historyArray }) {
    function displayHistory() {
        for (const x in historyArray) {
            return (
                <ul className="Weather">
                    <li>{historyArray[x].name}</li>
                    <li>Longitude: {historyArray[x].coord.lon}</li>
                    <li>Latitude: {historyArray[x].coord.lat}</li>
                    <li>Temp: {historyArray[x].temp}F</li>
                    <li>But it feels like {historyArray[x].main.feels_like}F</li>
                </ul>
            )
        }
    }
    return (
        <div>
            {displayHistory()}
        </div>
    )
}
