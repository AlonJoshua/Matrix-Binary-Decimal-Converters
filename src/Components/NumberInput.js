import React from 'react';

const NumberInput = (bin) => {
	return (
			<fragment>
			<input type='number' onChange={() => bin}></input>
			</fragment>
		)

}

export default NumberInput;