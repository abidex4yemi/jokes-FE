import React from 'react';
import PropTypes from 'prop-types';

const Joke = props => {
	const { joke } = props;

	return (
		<div>
			<p>{joke}</p>
		</div>
	);
};

Joke.propTypes = {
	joke: PropTypes.object.isRequired
};
