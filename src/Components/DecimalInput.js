import React, {Component} from 'react';

class DecimalInput extends Component {
	constructor(props) {
		super(props)
	}
	render() {
	return (
			<div id='decimal-input'>
			<h2 id='dec-bin-title'>Dec to Bin</h2>
			<input
			 id='dec-number'
			 type='text'
			 placeholder='positive numbers'
			 onChange={this.props.onDecInputChange}
			 >
			 </input>
			 <button
     		 type='reset'
    		 value='Reset'
    		 id='reset-dec'
    		 
    		 onClick={() => {
    	    	this.props.resetDecimalInput({target: {value: '0'}})
    		  }}
   		     >
    		 Reset
   		     </button>
   		     <div 
			  id='decimal-output'
			  style={{color: 'white'}}
			 >
			 <p>{this.props.binary}</p>
			 </div>
			</div>
		)
	}
}	

export default DecimalInput;