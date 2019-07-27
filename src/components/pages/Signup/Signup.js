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
		<main>
			<h2>Welcome to my dad jokes archive</h2>
			<div>
				<div>
					<form>
						<div>
							<label htmlFor="first_name">First Name</label>
							<input type="text" name="first_name" id="first_name" value={state.user.first_name} />
						</div>

						<div>
							<label htmlFor="last_name">Last Name</label>
							<input type="text" name="last_name" id="last_name" value={state.user.last_name} />
						</div>

						<div>
							<label htmlFor="email">Email</label>
							<input type="text" name="email" id="email" value={state.user.email} />
						</div>

						<div>
							<label htmlFor="Password">Password</label>
							<input type="password" name="password" id="password" value={state.user.password} />
						</div>

						<div>
							<button type="button">Register</button>
						</div>

						<div>
							<p>
								Already have an account <a href="/">login</a>
							</p>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Signup;
