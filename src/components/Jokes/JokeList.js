import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Joke from './Joke';

const JokeList = props => {
	const { jokes } = props;

	return <StyledJokeList>{jokes.map(joke => <Joke key={joke.id} {...joke} />)}</StyledJokeList>;
};

JokeList.propTypes = {
	jokes: PropTypes.array.isRequired
};

const StyledJokeList = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 1200px;
`;

export default JokeList;
