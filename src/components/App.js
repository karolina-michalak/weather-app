import React from 'react';
import '../App.css';
import Form from './Form.js';
import Outcome from './Outcome.js'


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
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return (
      <div>
        <Form value={this.state.value} change={this.handleChange} submit={this.handleSubmit}/>
        <Outcome/>
      </div>
    )
  }
}

export default App;
