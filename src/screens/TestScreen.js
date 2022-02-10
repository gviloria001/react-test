import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation, useParams } from "react-router";

export default function TestScreen() {
    const location = useLocation();
    const params = useParams()

    return (
        <div>
            {console.log({ location })}
            {console.log({ params })}
        </div>
    )
}