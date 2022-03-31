import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";

function HistoryScreen(params) {
    console.log(params);
    if (params.length >= null) {
        return (<div>
            Exists
        </div>
        )
    }
    return (
        <div>
            Does not exist.
        </div>
    )
}

export default HistoryScreen