import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Pages from '../pages';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/register" render={props => <Pages.Signup {...props} />} />
				<Route exact path="/" render={props => <Pages.Login {...props} />} />
			</Switch>
		</Router>
	);
};

export default App;
