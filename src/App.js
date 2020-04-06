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

  resetBinaryInput= (event) => {
    let input = document.getElementById('bin-number');
    input.value = event.target.value;
    this.setState({decimal: input.value})
  }

  resetDecimalInput= (event) => {
    let input = document.getElementById('dec-number');
    input.value = event.target.value;
    this.setState({binary: input.value})
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
    while (decimal > 0) {
      let rem = decimal % 2;
      binary.push(rem);
      decimal = decimal/2;
    }
    console.log('binary', binary);
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
