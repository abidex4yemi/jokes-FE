import React, { useState, useEffect } from 'react';
import JokeList from '../../Jokes/JokeList';
import { statement } from '@babel/template';

const Jokes = props => {
	const [state, setState] = useState({
		errors: null,
		jokes: []
	});

	return <JokeList jokes={statement.jokes} />;
};

export default Jokes;
