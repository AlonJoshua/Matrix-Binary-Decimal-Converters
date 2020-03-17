import React, { Component } from 'react';
import Output from './Components/Output';
import NumberInput from './Components/NumberInput';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      decimal: 0,
      inputString: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
    // this.setState({ inputString : event.target.value })
  }

//   bin2Dec = (bin) => {
//   let decimal= 0;
//   for (var index=bin.length-1; index >=0; index--) {
//     decimal += parseInt(bin[index])*Math.pow(2, bin.length-1-index);
//   }
//   return decimal;
// }

  render() {
    const { decimal, inputString } = this.state;
    return (
      <fragment>
      <h1>Binary to Decimal convertor</h1>
      <NumberInput InputChange={this.onInputChange} />
      <button>Submit</button>
      <Output string={inputString}/>
      </fragment>
      );
  }
}

export default App;
