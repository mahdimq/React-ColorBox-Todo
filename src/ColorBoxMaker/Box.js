import React from 'react';
import './Box.css';

function Box({ height, width, backgroundColor, deleteBox }) {
	return (
		<div
			className='Box'
			style={{
				backgroundColor: backgroundColor,
				width: `${width}px`,
				height: `${height}px`
			}}>
			<button onClick={deleteBox}>X</button>
		</div>
	);
}

export default Box;
