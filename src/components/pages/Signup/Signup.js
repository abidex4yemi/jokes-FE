import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const initialFormState = {
	errors: {},
	success: {},
	user: {
		first_name: '',
		last_name: '',
		email: '',
		password: ''
	}
};

/**
 * Create a new user account
 */
const Signup = () => {
	const [state, setState] = useState(initialFormState);

	return (
		<SignupStyled>
			<StyledContainer>
				<h2>Welcome to my dad jokes archive</h2>
				<formContainer>
					<form>
						<InputContainer>
							<label htmlFor="first_name">First Name</label>
							<input type="text" name="first_name" id="first_name" value={state.user.first_name} />
						</InputContainer>

						<InputContainer>
							<label htmlFor="last_name">Last Name</label>
							<input type="text" name="last_name" id="last_name" value={state.user.last_name} />
						</InputContainer>

						<InputContainer>
							<label htmlFor="email">Email</label>
							<input type="text" name="email" id="email" value={state.user.email} />
						</InputContainer>

						<InputContainer>
							<label htmlFor="Password">Password</label>
							<input type="password" name="password" id="password" value={state.user.password} />
						</InputContainer>

						<div>
							<button type="button">Register</button>
						</div>

						<AlreadyHaveAccount>
							<p>
								Already have an account <a href="/">login</a>
							</p>
						</AlreadyHaveAccount>
					</form>
				</formContainer>
			</StyledContainer>
		</SignupStyled>
	);
};

export default Signup;

const SignupStyled = styled.main``;

const formContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;

	form {
		width: 350px;
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
	}

	input {
		border: 1px solid #4b4b4b;
		border-radius: 5px;
		padding: 5px 10px;
		color: #4b4b4b;
		background: #fff;
	}
`;

const AlreadyHaveAccount = styled.div`
	width: 350px;
	border-radius: 5px;
	margin: 70px 0;
	padding: 20px;
	text-align: center;

	p a {
		color: #10acc2;
	}
`;
