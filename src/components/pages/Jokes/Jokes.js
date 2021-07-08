import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosWithHeaders from '../../../helper/axiosWithHeaders';
import JokeList from '../../Jokes/JokeList';

const Jokes = () => {
	const [state, setState] = useState({
		errors: null,
		fetching: false,
		jokes: []
	});

	useEffect(() => {
		setState(prevState => {
			return {
				...prevState,
				fetching: true
			};
		});

		axiosWithHeaders()
			.get('https://jokes-api-backend.herokuapp.com/api/v1/jokes')
			.then(res => {
				setState(prevState => {
					return {
						...prevState,
						jokes: res.data.body,
						fetching: false
					};
				});
			})
			.catch(error => {
				if (error.response.status === 400) {
					setState(prevState => {
						return {
							...prevState,
							errors: 'No jokes',
							fetching: false
						};
					});
				}
			});
	}, []);

	return (
		<StyledJokes>
			<JokeList jokes={state.jokes} />
		</StyledJokes>
	);
};

export default Jokes;

const StyledJokes = styled.div`
	display: flex;
	justify-content: center;
`;
