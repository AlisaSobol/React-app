import React from 'react';

const Card = ({ name, email, id }) => {

	return (
		<div className='card tc bg-washed-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img className='card-img' src={`https://robohash.org/${id}?&size=150x150`} alt="roboface" />
			<h3>{ name }</h3>
			<p>{ email }</p>
		</div>
	);
};

export default Card;
