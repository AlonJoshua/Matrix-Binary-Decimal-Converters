import React, { Component, Fragment } from 'react';
import Output from './Components/Output';
import NumberInput from './Components/NumberInput';
import Canvas from './Components/Canvas';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      decimal: 0,
    }
  }

  onInputChange = (event) => {
    console.log('event: ', event);
    let eventString = event.target.value;
    let validArray = eventString.split('');
    // Allow only binary digits in the input
    for (let i=0; i < eventString.length; i++) {
      if (validArray[i] !== '0' && validArray[i] !== '1') {
        validArray.splice(i, 1);
        event.target.value = validArray.join('');
      } 
    }
    return this.bin2Dec(validArray.join(''));
}

  bin2Dec = (bin) => {
  let decimal= 0;
  for (var index=bin.length-1; index >=0; index--) {
    decimal += parseInt(bin[index])*Math.pow(2, bin.length-1-index);
  }
  this.setState({decimal: decimal});
}
  

  render() {
    const { decimal } = this.state;
    return (
      <Fragment>
      <Canvas />
      <h1 
      id='main-title'
      style={{color: 'white'}}
      >
      Binary - Decimal convertor
      </h1>
      <NumberInput 
      inputChange={this.onInputChange}
       />
      <div id='reset-div'>
      <button
      type='reset'
      value='Reset'
      id='reset-btn'
      onClick={() => {
        this.onInputChange({target: {value: '0'}})
      }}
      >
      Reset
      </button>
      </div>
      <Output decimal={decimal}/>
      </Fragment>
      );
  }
}

export default App;
