import React from 'react';
import './Circle.css';

const Circle = ({ circle, idx, changePosition }) => {
	return (
		<div
			onClick={() => changePosition(idx)}
			className="Circle"
			style={{
				backgroundColor: circle.color,
				position: 'absolute',
				left: `${circle.x}vw`,
				top: `${circle.y}vh`,
			}}
		>
			{idx}
		</div>
	);
};

export default Circle;
