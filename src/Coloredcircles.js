import React, { useState } from 'react';
import ColoredButtons from './ColoredButtons';
import Circles from './Circles';

const Coloredcircles = () => {
	const [circles, setCircles] = useState([]);
	const getRandom = () => {
		return Math.random() * 100;
	};
	const addCircle = color => {
		setCircles(circle => [
			...circle,
			{
				color,
				x: getRandom(),
				y: getRandom(),
			},
		]);
		console.log(circles);
	};
	const changePosition = idx => {
		setCircles(circles =>
			circles.map((circle, i) =>
				i === idx ? { ...circle, x: getRandom(), y: getRandom() } : circle
			)
		);
	};

	return (
		<div className="Colored-circles">
			<ColoredButtons
				addCircle={addCircle}
				options={['peachpuff', 'lightsteelblue', 'paleturquoise']}
			/>
			<Circles circles={circles} changePosition={changePosition} />
		</div>
	);
};

export default Coloredcircles;
