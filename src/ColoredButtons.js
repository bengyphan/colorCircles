import React from 'react';

const ColoredButtons = ({ addCircle, options }) => {
	const colorbtns = options.map(color => (
		<button onClick={() => addCircle(color)} style={{ backgroundColor: color }}>
			{color}
		</button>
	));
	return <div>{colorbtns}</div>;
};

export default ColoredButtons;
