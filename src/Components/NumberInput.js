import React from 'react';

const NumberInput = ({ inputChange, handleKeyDown }) => {
	return (
			<div>
			<input
			 id='input-number'
			 type='text'
			 onChange={inputChange}
			 onKeyDown={handleKeyDown}
			 >
			 </input>

			</div>
		)
}

export default NumberInput;