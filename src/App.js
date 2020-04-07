import React, { Component, Fragment } from 'react';
import BinaryInput from './Components/BinaryInput';
import DecimalInput from './Components/DecimalInput';
import Canvas from './Components/Canvas';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      decimal: 0,
      binary: 0
    }
  }

  resetBinaryInput = (event) => {
    let input = document.getElementById('bin-number');
    this.setState({decimal: event.target.value})
    input.value = '';
  }

  resetDecimalInput= (event) => {
    let input = document.getElementById('dec-number');
    this.setState({binary: 0})
    input.value = '';
  }

  onBinInputChange = (event) => {
    let eventString = event.target.value;
    let validArray = eventString.split('');
    // Allow only binary digits in the input
    for (let i=0; i < eventString.length; i++) {
      if (validArray[i] !== '0' && validArray[i] !== '1') {
        validArray.splice(i, 1);
        event.target.value = validArray.join('');
      } 
    }
    // Algorithm for convert binary to decimal
    let bin = validArray.join('');
    let decimal= 0;
     for (let index=bin.length-1; index >=0; index--) {
    decimal += parseInt(bin[index])*Math.pow(2, bin.length-1-index);
    }
     this.setState({decimal: decimal});
}

  onDecInputChange = (event) => {
    let eventString = event.target.value;
    const regex = /[0-9]/g;
    let validArray = [];
    let eventArray = eventString.match(regex);
    // Allow only Positive value decimals
    if (eventArray === null) {
      eventArray = validArray;
      event.target.value = validArray.join('');
         } else {
      validArray = eventArray;
      event.target.value = eventArray.join('');
    }
    // Algorithm for convert decimal to binary
    let decimal = Number(validArray.join(''));
    let binary = [];
    const isZero = (e) => e === '0';
    if (eventString.length === 0) {
      console.log('1')
      binary.push(0);
    } else if (eventString.split('').every(isZero)) {
      console.log('2', binary);
      binary.push(0);
    } else {
      console.log('3: ', eventString.split(''))
      binary.pop();
    }
    while (decimal > 0) {
      let rem = decimal % 2;
      binary.unshift(rem);
      decimal = Math.floor(decimal/2);
    }
  this.setState({binary: binary});
}
  
  render() {
    return (
      <Fragment>
      <Canvas />
      <h1 
      id='main-title'
      style={{color: 'white'}}
      >
      Binary - Decimal Convertors
      </h1>
      <div id='convertors-container'>
      <BinaryInput 
      onBinInputChange={this.onBinInputChange}
      resetBinaryInput={this.resetBinaryInput}
      decimal={this.state.decimal}
       />
      }
      }
      <DecimalInput 
      onDecInputChange={this.onDecInputChange}
      resetDecimalInput={this.resetDecimalInput}
      binary={this.state.binary}
      />
      </div>
      <div id='reset-div'>
      </div>
      </Fragment>
      );
  }
}

export default App;
