import React from 'react';

const Outcome = props => {
    const {city, date, temperature, pressure, sunrise, sunset, error } = props.weather

    let content = null

    if(!error && city){
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

    content = (
        <div>Weather for: {city}</div>

    )
    }


        return (
            <div>
               {error ? `not avaliable for ${city}` : content}
            </div>
        )
    }


export default Outcome
