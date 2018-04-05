import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ButtonComponent } from './components/button/button.component';
import { LandingComponent } from './components/landing/landing.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

const logo = require('./logo.svg');

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Link
						to={'/'}
						className="App-header"
					>
						<span
							className="header-logo"
						>
							{'{standard-style:'}
						</span>
						<img
							src={logo}
							className="App-logo"
							alt="logo"
						/>
						<span
							className="header-logo"
						>
							{'}'}
						</span>
					</Link>
					<div
						className="main-layout"
					>
						<SideBarComponent/>
						<div
							className="content"
						>
							<Route
								path="/"
								exact={true}
								component={LandingComponent}
							/>
							<Route
								path="/button"
								render={() => {
									return (<ButtonComponent/>);
								}}
							/>
							<Route
								path="/background"
								render={() => {
									return (<ButtonComponent/>);
								}}
							/>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
