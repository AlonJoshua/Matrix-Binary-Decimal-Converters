import React from 'react';

const NumberInput = ({ inputChange }) => {
	return (
			<div id='binary-input'>
			<input
			 id='input-number'
			 type='text'
			 placeholder='binary only'
			 onChange={inputChange}
			 >
			 </input>

			</div>
		)
}

export default NumberInput;