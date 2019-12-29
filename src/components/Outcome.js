import React from 'react';
import styles from '../modules/Outcome.module.css';

const Outcome = props => {
    const {city, date, temperature, pressure, sunrise, sunset, error } = props.weather

    let content = null

    if(!error && city){
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

    content = (
        <>
            <div className={styles.element}>Weather for: <span>{city}</span> at: <span>{date}</span></div>
            <div className={styles.element}>Temperature: {temperature} &deg;C</div>
            <div className={styles.element}>Pressure: {pressure} hPa</div>
            <div className={styles.element}>Sunrise: {sunriseTime}</div>
            <div className={styles.element}>Sunset: {sunsetTime}</div>
        </>
    )
}

        return (
            <div className={styles.container}>
               {error ? `not avaliable for '${city}'` : content}
            </div>
        )
    }


export default Outcome
