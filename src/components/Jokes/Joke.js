import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Joke = props => {
	const { joke } = props;

	return (
		<StyledJoke>
			<p>{joke}</p>
		</StyledJoke>
	);
};

Joke.propTypes = {
	joke: PropTypes.string.isRequired
};

export default Joke;

const StyledJoke = styled.div`
	width: 300px;
	height: 100px;
	margin: 20px;
	color: white;
	padding: 20px;
	border-radius: 5px;
	background: #10acc2;
`;
