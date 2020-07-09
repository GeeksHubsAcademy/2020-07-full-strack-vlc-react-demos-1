import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Imports de containers y componentes
import Register from './containers/register/register.jsx';
import Login from './containers/login/login.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';

//Imports de CSS
import './App.css';

export default function App() {
	return (
		<div>
			<Router>
				
				<Header />
				
				<Switch>
					{/* <Route path="/" exact component={Counter} /> */}
					<Route path="/register" exact component={Register} />
					<Route path="/login" exact component={Login} />
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}
