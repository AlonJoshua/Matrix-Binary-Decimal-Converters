import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      decimal: 0
    }
  }

  bin2Dec = (bin) => {
  let decimal=0;
  for (var index=bin.length-1; index >=0; index--) {
    decimal += parseInt(bin[index])*Math.pow(2, bin.length-1-index);
  }
  return decimal;
}

  render() {
    return (
      <fragment>
      <h1>Hello World</h1>
      </fragment>
      );
  }
}

export default App;
