import React from 'react';
import Circle from './Circle';

const Circles = ({ circles, changePosition }) => {
	const colorcircles = circles.map((c, i) => (
		<Circle changePosition={changePosition} circle={c} idx={i} key={i} />
	));
	return <div>{colorcircles}</div>;
};

export default Circles;
