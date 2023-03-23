import React from 'react';

const Fixed = (props) => {
	return (
		<div style={{position: 'fixed', left:0, right:0, top: 0, zIndex: 1 }} className="bg-dark-green">
			{ props.children }
		</div>
	);
};

export default Fixed;
