import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const initialFormState = {
	errors: null,
	loginIn: false,
	user: {
		email: '',
		password: ''
	}
};

/**
 * Create a new user account
 */
const Login = props => {
	const [state, setState] = useState(initialFormState);

	const handleInputChange = (field, value) => {
		setState(prevState => {
			return {
				...prevState,
				user: {
					...prevState.user,
					[field]: value
				}
			};
		});
	};

	const handleSubmit = () => {
		console.log(state.user);
		setState(prevState => {
			return {
				...prevState,
				loggingIn: true
			};
		});

		const userDetails = state.user;

		const url = 'https://jokes-api-backend.herokuapp.com/api/v1/auth/login';

		axios
			.post(url, userDetails)
			.then(res => {
				localStorage.setItem('token', res.data.body.token);

				setState(prevState => {
					return {
						...prevState,
						loggingIn: false
					};
				});

				if (res.data.body.user.id) {
					props.history.push('/jokes');
				}
			})
			.catch(error => {
				if (error.response.status === 400) {
					setState(prevState => {
						return {
							...prevState,
							errors: 'Fill all required fields',
							creating: false
						};
					});
				}
			});
	};

	return (
		<SignupStyled>
			<StyledContainer>
				<h2>Welcome back</h2>
				<FormContainer>
					<form
						onSubmit={evt => {
							evt.preventDefault();
							handleSubmit();
						}}
					>
						<InputContainer>
							<label htmlFor="email">Email</label>
							<input
								type="text"
								name="email"
								id="email"
								value={state.user.email}
								onChange={evt => handleInputChange(evt.target.name, evt.target.value)}
							/>
						</InputContainer>

						<InputContainer>
							<label htmlFor="Password">Password</label>
							<input
								type="password"
								name="password"
								id="password"
								value={state.user.password}
								onChange={evt => handleInputChange(evt.target.name, evt.target.value)}
							/>
						</InputContainer>

						<StyledLoginButton type="button" disabled={state.loggingIn} onClick={handleSubmit}>
							Login
						</StyledLoginButton>

						<DontHaveAccount>
							<p>
								Already have an account <a href="/register">Register</a>
							</p>
						</DontHaveAccount>
					</form>
				</FormContainer>
			</StyledContainer>
		</SignupStyled>
	);
};

export default Login;

const SignupStyled = styled.main`
	h2 {
		text-align: center;
		margin: 50px 0;
	}
`;

const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;

	h3 {
		display: block;
	}

	form {
		box-sizing: border-box;
		width: 300px;
		border-radius: 5px;
	}
`;

const StyledContainer = styled.div`
	max-width: 1200px;
	width: 80%;
	margin: 0 auto;
`;

const InputContainer = styled.div`
	margin-bottom: 10px;

	label {
		color: #4b4b4b;
		display: block;
		margin-bottom: 3px;
	}

	input {
		box-sizing: border-box;
		border: 1px solid #4b4b4b;
		border-radius: 5px;
		padding: 5px 10px;
		color: #4b4b4b;
		background: #fff;
		display: block;
		width: 100%;
		height: 40px;
		font-size: 16px;
		outline: none;
		transition: 0.2s;

		&:focus {
			border-color: #10acc2;
		}
	}
`;

const DontHaveAccount = styled.div`
	box-sizing: border-box;
	width: 300px;
	border-radius: 5px;
	border: 1px solid #4b4b4b;
	margin: 50px 0;
	text-align: center;

	p a {
		color: #10acc2;

		&:hover {
			color: #001c20;
		}
	}
`;

const StyledLoginButton = styled.button`
	width: 100%;
	height: 40px;
	box-sizing: border-box;
	border: 0;
	border: 1px solid #10acc2;
	background: #10acc2;
	color: #fff;
	font-size: 16px;
	font-weight: normal;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		background: #001c20;
		border-color: #001c20;
	}
`;
