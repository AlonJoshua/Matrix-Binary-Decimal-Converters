import React, {Component} from 'react';

class BinaryInput extends Component {
	constructor(props) {
		super(props)
	}
	render() {
	return (
			<div id='binary-input'>
			<h2 id='bin-dec-title'>Bin to Dec</h2>
			<input
			 id='bin-number'
			 type='text'
			 placeholder='binary only'
			 onChange={this.props.onBinInputChange}
			 >
			 </input>
			 <button
     		 type='reset'
    		 value='Reset'
    		 id='reset-bin'
    		 onClick={() => {
    	    	this.props.resetBinaryInput({target: {value: '0'}})
    		  }}
   		     >
    		 Reset
   		     </button>
   		     <div 
			  id='bin-output'
			  style={{color: 'white'}}
			 >
			 <p>{this.props.decimal}</p>
			 </div>
			 </div>
		)
	}
}

export default BinaryInput;