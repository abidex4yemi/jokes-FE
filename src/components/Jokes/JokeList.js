import React from 'react';
import PropTypes from 'prop-types';
import Joke from './Joke';

const JokeList = props => {
	const { jokes } = props;

	return <div>{jokes.map(joke => <Joke key={joke.id} {...joke} />)}</div>;
};

JokeList.propTypes = {
	jokes: PropTypes.array.isRequired
};

export default JokeList;
