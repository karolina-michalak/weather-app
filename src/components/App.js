import React from 'react';
import '../App.css';
import Form from './Form.js';
import Outcome from './Outcome.js'



const APIkey = '8b8637b7d1aae4708ca3edc46e3dc175'

class App extends React.Component {
  render(){
    return (
      <div>
        <Form/>
        <Outcome/>
      </div>
    )
  }
}

export default App;
