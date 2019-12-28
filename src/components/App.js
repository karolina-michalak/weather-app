import React from 'react';
import Form from './Form.js';
import Outcome from './Outcome.js';
import styles from '../modules/App.module.css';
import weather from '../img/weather.jpg'


const APIkey = '8b8637b7d1aae4708ca3edc46e3dc175'

class App extends React.Component {
  state = {
    value: '',
    city: '',
    date: '',
    temperature: '',
    pressure: '',
    sunrise: '',
    sunset: '',
    error: false
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}&units=metric`)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error('something went wrong')
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState(prevState => ({
        city: prevState.value,
        date: time,
        temperature: data.main.temp,
        pressure: data.main.pressure,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        error: false
      }))
    })
    .catch(error => {
      console.log(error);
      this.setState(prevState => ({
        error: true,
        city: prevState.value
      }))
    })
    }
  
  

  render(){
    return (
      <div className={styles.container}>
        <div className={styles.photo}>
          <img src={weather} alt='weather-photo'/>
        </div>
        <div className={styles.form}>
          <h1>Weather App</h1>
          <Form value={this.state.value} change={this.handleChange} submit={this.handleSubmit}/>
          <Outcome weather={this.state}/>
        </div>
      </div>
    )
  }
}

export default App;
