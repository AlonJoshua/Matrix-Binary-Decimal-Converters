import React from 'react';

const NumberInput = ({ inputChange }) => {
	return (
			<div>
			<input
			 id='input-number'
			 type='number' 
			 onChange={inputChange}></input>
			</div>
		)
}

export default NumberInput;