import React, { Component } from 'react';

class Canvas extends Component {

	componentDidMount() {
		const mdr = this.refs.canvas;
		mdr.id = 'mdr';
		mdr.style.display = 'block';
		mdr.style.backgroundColor = 'white';
		mdr.position = 'fixed';
		mdr.style.top = '0';
		mdr.style.left = '0';
		mdr.style.zIndex = '-1';

		const ctx = mdr.getContext('2d');
		mdr.height = window.innerHeight;
		mdr.width = window.innerWidth;
	}

	render() {
		return (
			<div>
			<canvas ref='canvas' width='100%' height='400 px'/>
			</div>
			)
	}
}

export default Canvas;