import React from 'react';

const Search = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input onChange={searchChange} className='w-50 input-reset pa2 ba bw1 bg-white b--green' type="search" placeholder='Search for a robofriend' />
		</div>
	);
};

export default Search;
