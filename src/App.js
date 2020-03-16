import React, { Component } from 'react';
import Output from './Components/Output';
import NumberInput from './Components/NumberInput';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      decimal: 0
    }
  }

  bin2Dec = (bin) => {
  let decimal= 0;
  for (var index=bin.length-1; index >=0; index--) {
    decimal += bin[index]*Math.pow(2, bin.length-1-index);
  }
  return decimal;
}

  render() {
    return (
      <fragment>
      <h1>Binary to Decimal convertor</h1>
      <NumberInput bin={this.bin} />
      <button>Submit</button>
      <Output/>
      </fragment>
      );
  }
}

export default App;
