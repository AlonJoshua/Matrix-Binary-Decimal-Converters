import React, { Component } from 'react';

class Canvas extends Component {

	componentDidMount() {
		const mdr = this.refs.canvas;
		mdr.id = 'mdr';
		mdr.style.display = 'block';
		mdr.style.position = 'fixed';
		mdr.style.zIndex = '-1';
		mdr.position = 'fixed';
		mdr.style.top = '0';
		mdr.style.left = '0';
		mdr.style.width = '100%';
		mdr.style.height = '100%';

		const ctx = mdr.getContext('2d');
		mdr.height = window.innerHeight;
		mdr.width = window.innerWidth;

		const binary = '101010';

		const fontSize = 25;
		const columns = mdr.width/fontSize;

		let drops = [];

		for (let x = 0; x < columns; x++) {
			drops[x] = 200;
		}

		window.requestAnimationFrame(() => {
			mdr.height = window.innerHeight;
			mdr.width = window.innerWidth;
			const columns = mdr.width/fontSize;
			for (let x = 0; x < columns; x++) {
			drops[x] = 200;
		   }
		})

		const draw = () => {
			ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
			ctx.fillRect(0, 0, mdr.width, mdr.height);

			ctx.fillStyle = 'green';
			ctx.font = fontSize + 'px arials';

			for (let i = 0; i < drops.length; i++) {
				let text = binary[Math.floor(Math.random()*binary.length)];
				ctx.fillText(text, i*fontSize, drops[i]*fontSize);

				if (drops[i]*fontSize > mdr.height && Math.random() > 0.975) {
					drops[i] = 0;
				}

				drops[i]++;

			}
		};
		setInterval(() => {window.requestAnimationFrame(draw)}, 50);
	}

	render() {
		return (
			<div>
			<canvas ref='canvas'/>
			</div>
			)
	}
}

export default Canvas;