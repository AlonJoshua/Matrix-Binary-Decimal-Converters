import React from 'react';

const Output = ({ decimal }) => {
	return (
			<div 
			id='output-view'
			style={{color: 'white'}}
			>
			<h2>{decimal}</h2>
			</div>
		)
}

export default Output;