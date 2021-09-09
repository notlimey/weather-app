import React from 'react'

const Weather = ({weatherData}) => {

    if(weatherData === undefined)
        return <></>;

    return (
        <div>
            <h3>{weatherData.name}</h3>
            <p>{weatherData.weather[0].main}</p>
            <p>Temp: {((weatherData.main.temp - 273.15).toFixed(1))}</p>
            <p>Feels like: {((weatherData.main.feels_like - 273.15).toFixed(1))}</p>
        </div>
    )
}

export default Weather;