import React, { Component, Fragment } from 'react';
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

  handleKeyDown = (event) => {
    const keyCode = event.keyCode || event.which
    if (keyCode >= 50 && keyCode <= 57) {
      event.preventDefault()
    }
  }

  onInputChange = (event) => {
    let inputNumber = event.target.value;
    let history;
    for (let number of inputNumber) {
      if (number !== Number) {
      
    } else {
      this.bin2Dec(inputNumber);
    }
   }
  }

  bin2Dec = (bin) => {
  let decimal= 0;
  for (var index=bin.length-1; index >=0; index--) {
    decimal += parseInt(bin[index])*Math.pow(2, bin.length-1-index);
  }
  this.setState({decimal: decimal});
  // return this.setState({decimal : decimal});
}

  render() {
    const { decimal, inputString } = this.state;
    return (
      <Fragment>
      <h1>Binary to Decimal convertor</h1>
      <NumberInput 
      inputChange={this.onInputChange}
      handleKeyDown={this.handleKeyDown}
       />
      <button>Submit</button>
      <Output string={inputString}/>
      </Fragment>
      );
  }
}

export default App;
