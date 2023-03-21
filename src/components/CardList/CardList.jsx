import React from 'react';
import { Card } from '../Card';

//  WE CAN WRIDE THIS WAY ...

// const CardList = ({ robots }) => {
// 	const cardArr = robots.map((user, i) => {
// 		return (<Card key={i} id={user.id} name={user.name} email={user.email} />)
// 	});

// 	return (
// 		<div>
// 			{ cardArr }
// 		</div>
// 	);
// };




//  AND THIS ...

const CardList = ({ robots }) => {
	return (
		<div>
			{ 
				robots.map((user, i) => {
					return (
						<Card 
									key={i} 
									id={user.id} 
									name={user.name} 
									email={user.email} />
					)
				})
			}
		</div>
	);
};

export default CardList;